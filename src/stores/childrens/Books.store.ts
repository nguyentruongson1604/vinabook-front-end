import { makeAutoObservable } from "mobx"
import {TRootStore} from "../RootStore.store"
import { getAllBook, getBookByAuthor, getBookById, getBookByPublisher, getBooksByCategory, searchBooks } from "../../APIs/book.api"

export interface IBook {
    _id: string,
    name: string,
    description: string,
    page: number,
    price: number,
    quantity: number,
    discount: number,
    imageUrl: string,
    language: string,
    publisher: IPublisherInBook,
    author: IAuthorInBook,
    category: ICategoryInBook
}

export interface IBookCategory {
    categoryId: string,
    categoryName: string,
    listBook: IBook[]
}

interface IAuthorInBook {
    _id: string,
    name: string
}

interface ICategoryInBook {
    _id: string,
    name: string
}

interface IPublisherInBook {
    _id: string,
    name: string
}

export interface IFilter {
    keyWord?: string,
    limit?: number,
    page?: number
}

class BooksStore {
    listBook?: IBook[]
    page?: number
    size?: number
    RootStore?: TRootStore
    currentBook?: IBook
    listBookCategory: IBookCategory[] = []

    constructor(RootStore: TRootStore){
        makeAutoObservable(this)
        this.RootStore = RootStore
    }

    get getPageNumber(){
        return this.page
    }

    setPage(page: number){
        // console.log( 'page',page)
        this.page = page
    }

    get getListBookCategory(){
        return this.listBookCategory
    }

    setListBookCategory(books: IBookCategory){
        if(!this.listBookCategory.find(book => book.categoryId === books.categoryId) && books.listBook.length > 0)
            this.listBookCategory = [...this.listBookCategory, books]
    }

    get getBooks(){
        return this.listBook
    }

    setBooks(books: IBook[]){
        this.listBook = books
        this.size = books.length
    }

    get getCurrentBook(){
        return this.currentBook
    }

    setCurrentBook(book: IBook){
        this.currentBook = book
    }

    async getAllBooksAPI(filter: IFilter){
        try {
            filter.limit = 10
            const res = await getAllBook(filter)
            this.setBooks(res?.data.data)
            this.setPage(res?.data.page)
        } catch (error) {
            console.log(error)
        }
    }

    async getCurrentBookAPI(bookId: string){
        try {
            const res = await getBookById(bookId)
            this.setCurrentBook(res?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getBooksOfAuthorAPI(authorId: string, filter: IFilter){
        try {
            if(!filter.limit){
                filter.limit = 6
            }
            const res = await getBookByAuthor(authorId, filter)
            this.setBooks(res?.data.data)
            this.setPage(res?.data.page)
        } catch (error) {
            console.log(error)
        }
    }

    async getBooksOfCategoryAPI(categoryId: string, filter: IFilter){
        try {
            if(!filter.limit){
                filter.limit = 6
            }
            const res = await getBooksByCategory(categoryId, filter)
            // console.log('res', res)
            this.setBooks(res?.data.data)
            this.setPage(res?.data.page)
        } catch (error) {
            console.log(error)
        }
    }

    async getBooksOfPublisherAPI(publisherId: string, filter: IFilter){
        try {
            if(!filter.limit){
                filter.limit = 6
            }
            const res = await getBookByPublisher(publisherId, filter)
            this.setBooks(res?.data.data)
            this.setPage(res?.data.page)
        } catch (error) {
            console.log(error)
        }
    }

    async getBooksSearchAPI(filter: IFilter){
        try {
            //get 10 books in a page
            filter.limit = 10
            const res = await searchBooks(filter)
            this.setBooks(res?.data.data)
            this.setPage(res?.data.page)
        } catch (error) {
            console.log(error)
        }
    }    
    
}



export default BooksStore