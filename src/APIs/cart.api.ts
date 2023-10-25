import { axiosInstanceOptions, createAxiosInstance } from "../instances/instance"

export interface ICart{
    owner?: string,
    listBook?: IBookInCart[],
    totalCost?: number
}

export interface IBookInCart{
    book?: string,
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
            baseURL:   `/api/v1/cart/${userId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        // console.log(`cart of user`, res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function clearCart(userId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/${userId}/clear-cart`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.put('/')
        // console.log('clear cart: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function removeABook(userId: string, bookId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/${userId}/remove?bookId=${bookId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.delete('/')
        // console.log('remove a book: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteOneTypeBook(userId: string, bookId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/${userId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.delete('/', {bookId: bookId} as any)
        // console.log('delete on type book: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function addBookToCart(userId: string, newBook: IBookInCart) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/cart/${userId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', newBook)
        // console.log('add book to cart: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}