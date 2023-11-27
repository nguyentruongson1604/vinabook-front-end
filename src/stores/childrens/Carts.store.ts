import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import { getAllCarts, getCartByUserId, addBookToCart, clearCart, removeABook, deleteOneTypeBook, getCart, initCartFromLocal } from "../../APIs/cart.api"

export interface IBookCart {
    _id: string,
    name: string,
    imageUrl: string,
    price?: number,
    discount?: number
    quantity?: number
}

export interface IBookInCart {
    bookId: IBookCart
    quantity: number
}

interface ICart {
    _id: string,
    owner?: {
        _id: string,
        name: string
    },
    listBook: IBookInCart[],
    totalCost?: number
}

class CartStore {
    accessToken?: string
    currentCart : ICart = {
        _id: 'guest',
        listBook: []
    }
    listCarts?: ICart[]
    RootStore?: TRootStore

    constructor(RootStore: TRootStore){
        this.RootStore = RootStore
        const accessToken = localStorage.getItem('accessToken')
        accessToken ? this.setAccessToken(accessToken) : this.setAccessToken('')
        makeAutoObservable(this)
    }

    setAccessToken(accessToken: string){
        this.accessToken = accessToken
    }

    get getAccessToken(){
        return this.accessToken
    }

    setCurrentCart(cart: ICart){
        this.currentCart = cart
    }

    get getCurrentCart(){
        return this.currentCart
    }

    setListCart(carts: ICart[]){
        this.listCarts = carts
    }

    get getAllCarts(){
        return this.listCarts
    }

    async addBookToCart(book: IBookInCart){
        const checkExist = this.currentCart.listBook.find((item: IBookInCart) => {
            return item.bookId._id === book.bookId._id;
        })
        if(checkExist){
            this.currentCart.listBook.filter(async (item: IBookInCart)=>{
                if(item.bookId._id === book.bookId._id && item.quantity < book.bookId.quantity!){
                    item.quantity += 1;
                    await this.addBookToCartAPI({bookId: book.bookId._id, quantity: book.quantity});
                }
            })
        }
        else{
            this.currentCart.listBook = [...this.currentCart?.listBook, book];
            await this.addBookToCartAPI({bookId: book.bookId._id, quantity: book.quantity});
        }
        
        if(this.accessToken ===''){
            localStorage.setItem('cart', JSON.stringify(this.currentCart))
        }
        // alert('Them sach vao gio hang thanh cong!')
    }

    deleteBookFromCart(bookId: string){
        const newItems: IBookInCart[] = this.currentCart.listBook.filter((item: IBookInCart)=>{
            return item.bookId._id !== bookId
        })
        const newCart: ICart = {...this.currentCart, listBook: newItems}
        this.setCurrentCart(newCart)
        if(this.accessToken === ''){
            localStorage.setItem('cart', JSON.stringify(this.currentCart))
        }
        else{
            this.deleteOneTypeBookAPI(bookId)
        }
    }

    removeOneBookFromCart(bookId: string){
        const newItems: IBookInCart[] = this.currentCart.listBook.map((item: IBookInCart)=>{
            if(item.bookId._id === bookId){
                item.quantity -= 1
            }
            return item
        })
        const newCart: ICart = {...this.currentCart, listBook: newItems}
        this.setCurrentCart(newCart)
        if(this.accessToken === ''){
            localStorage.setItem('cart', JSON.stringify(this.currentCart))
        }
        else{
            this.removeABookAPI(bookId)
        }
        
    }

    clearCart(){
        this.currentCart = {...this.currentCart, listBook: []}
        localStorage.setItem('cart', JSON.stringify(this.currentCart))
    }

    async getAllCartsAPI(){
        try {
            const carts = await getAllCarts()
            console.log(carts?.data.data)
            this.setListCart(carts?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getCartByUserAPI(userId: string){
        try {
            const cart = await getCartByUserId(userId)
            this.setCurrentCart(cart?.data.data)

        } catch (error) {
            console.log(error)
        }   
    }

    async getCart(){
        try {
            const cart = await getCart()
            const userCart: ICart = {
                _id: cart?.data.data.owner,
                listBook: [...cart?.data.data.listBook]
            }
            this.setCurrentCart(userCart)

            if(userCart.listBook.length === 0){
                const localCart = JSON.parse(localStorage.getItem('cart')!)
                const initCart = await initCartFromLocal(localCart)
                const userCart: ICart = {
                    _id: initCart?.data.data.owner,
                    listBook: [...initCart?.data.data.listBook]
                }
                // console.log('init', userCart)
                this.setCurrentCart(userCart)
            }

            // console.log('cart', cart)
            // if(cart?.data.status === 'cart empty'){
            //     this.currentCart.listBook = []
            //     const localCart = JSON.parse(localStorage.getItem('cart')!)
            //     const userCart = Promise.all(localCart.listBook.map((item: IBookInCart)=>{
            //         this.addBookToCart(item)
            //         // console.log('add item: ', item)
            //     }))
            //     console.log('userCart', userCart)
            // }
            // else{
                
            // }
            
        } catch (error) {
            console.log(error)
        }   
    }

    async addBookToCartAPI(book: {bookId: string, quantity: number}){
        try {
            await addBookToCart(book)
        } catch (error) {
            console.log(error)
        }
    }

    async clearCartAPI(){
        try {
            const cartClear = await clearCart()
            this.setCurrentCart(cartClear?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async removeABookAPI(bookId: string){
        try {
            await removeABook(bookId)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteOneTypeBookAPI(bookId: string){
        try {
            await deleteOneTypeBook(bookId)
        } catch (error) {
            console.log(error)
        }
    }
}

export default CartStore