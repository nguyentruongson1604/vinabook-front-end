import { axiosInstanceOptions, createAxiosInstance } from "../instances/instance"

export interface ICart{
    owner?: string,
    listBook?: IBookInCart[],
    totalCost?: number
}

export interface IBookInCart{
    bookId?: string,
    quantity: number
}

export async function getAllCarts() {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/cart/all'
        }
        const instance =  createAxiosInstance(options)
        const res = await instance.get('/')
        // console.log('all cart: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getCartByUserId(userId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL:   `/api/v1/cart/get-cart/${userId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        // console.log(`cart of user`, res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getCart() {
    try {
        const options: axiosInstanceOptions = {
            baseURL:   `/api/v1/cart/get-cart`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        // console.log(`cart of user`, res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function clearCart() {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/clear-cart`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.put('/')
        // console.log('clear cart: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function removeABook(bookId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/remove-book?bookId=${bookId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.delete('')
        // console.log('remove a book: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteOneTypeBook(bookId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/delete-book`
        }
        const instance = createAxiosInstance(options)
        const params = {bookId: bookId}
        const res = await instance.delete('/', {data: params})
        // console.log('delete on type book: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function addBookToCart(newBook: IBookInCart) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/add-book`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', newBook)
        // console.log('add book to cart: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function initCartFromLocal(listBook: IBookInCart[]) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/init-cart`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', listBook)
        // console.log('add book to cart: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}