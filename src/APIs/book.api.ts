import { axiosInstanceOptions, createAxiosInstance } from "../instances/instance"
import { IFilter } from "../stores/childrens/Books.store"

export interface IBook{
    name?: string,
    description?: string,
    page?: number,
    price?: number,
    quantity?: number,
    discount?: number,
    imageUrl?: string,
    language?: string,
    publisher?: string,
    author?: string,
    category?: string
}

export async function createNewBook(newBook: IBook) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/book/new-book'
        }
    
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', newBook)
        // console.log('new book', res)    
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function updateABook(updateBook: IBook, bookId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/${bookId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.put('', updateBook)
        // console.log('updated book: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteBook(bookId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/${bookId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.delete('')
        // console.log('delete response: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function uploadImageBook(bookId: string, image: File) {
    try {
        const formData = new FormData()
        formData.append('image', image)
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/${bookId}/upload`,
            headers: {
                'Content-Type': 'image/JPG'
            }
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', formData)
        // console.log('upload result: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getAllBook(filter: IFilter) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/all-book?limit=${filter.limit}&page=${filter.page}`
        }
        const instance = createAxiosInstance(options)
        const res = instance.get('/')
        // console.log('all book: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getBookById(bookId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/${bookId}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('')
        // console.log('book by Id: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getBookByAuthor(authorId: string, filter: IFilter) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/author/${authorId}?limit=${filter.limit}&page=${filter.page}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('')
        // console.log('book by author: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getBookByPublisher(publisherId: string, filter: IFilter) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/publisher/${publisherId}?limit=${filter.limit}&page=${filter.page}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('')
        // console.log('book by publisher: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getBooksByCategory(categoryId: string, filter: IFilter) {
    try {
        if(!filter.limit){
            filter.limit = 6
        }
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/category/${categoryId}?limit=${filter.limit}&page=${filter.page}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('')
        // console.log('book by category: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function searchBooks(filter: IFilter) {
    try {
        console.log('filter', filter)
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/book/all-book/search?page=${filter.page}&keyword=${filter.keyWord}&limit=${filter.limit}`
        }
        console.log('baseUrl', options.baseURL)
        const instance = createAxiosInstance(options)
        const res = await instance.get('')
        // console.log('book by filter: ', res)

        return res
    } catch (error) {
        console.log(error)
    }
}