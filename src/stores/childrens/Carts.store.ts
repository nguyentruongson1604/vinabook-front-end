import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import { getAllCarts, getCartByUserId, addBookToCart, clearCart, removeABook, deleteOneTypeBook } from "../../APIs/cart.api"

interface IBook {
    _id: string,
    name: string,
    price: number,
    discount: number
}

interface IBookInCart {
    book: IBook
    quantity: number
}

interface ICart {
    _id: string
    listBook: IBookInCart[],
}

class CartStore {
    [x: string]: any
    currentCart? : ICart
    cartByUserId?: ICart
    listCarts?: ICart[]
    RootStore?: TRootStore

    constructor(RootStore: TRootStore){
        this.RootStore = RootStore
        makeAutoObservable(this)
    }

    setCurrentCart(cart: ICart){
        this.currentCart = cart
    }

    get getCurrentCart(){
        return this.currentCart
    }

    get getCartByUserId(){
        return this.cartByUserId
    }

    setListCart(carts: ICart[]){
        this.listCarts = carts
    }

    get getAllCarts(){
        return this.listCarts
    }

    async getAllCartsAPI(){
        try {
            const carts = await getAllCarts()
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

    async getCartByUserIdAPI(userId: string){
        try {
            const cart = await getCartByUserId(userId)
            this.cartByUserId = cart?.data.data
        } catch (error) {
            console.log(error)
        }
    }

    async addBookToCartAPI(userId: string, book: {bookId: string, quantity: number}){
        try {
            const cart = await addBookToCart(userId, book)
            this.setCurrentCart(cart?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async clearCartAPI(userId: string){
        try {
            const cartClear = await clearCart(userId)
            this.setCurrentCart(cartClear?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async removeABookAPI(userId: string, bookId: string){
        try {
            const cart = await removeABook(userId, bookId)
            this.setCurrentCart(cart?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteOneTypeBookAPI(userId: string, bookId: string){
        try {
            const cart = await deleteOneTypeBook(userId, bookId)
            this.setCurrentCart(cart?.data.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export default CartStore