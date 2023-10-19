import { makeAutoObservable } from "mobx"
import {TRootStore} from "../RootStore.store"
import { getAllBook, getBookByAuthor, getBookById, getBooksByCategory, searchBooks } from "../../APIs/book.api"

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
    size?: number
    RootStore?: TRootStore
    currentBook?: IBook
    listBookCategory: IBookCategory[] = []

    constructor(RootStore: TRootStore){
        makeAutoObservable(this)
        this.RootStore = RootStore
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

    async getAllBooksAPI(){
        try {
            const res = await getAllBook()
            this.setBooks(res?.data.data)
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

    async getBooksOfAuthorAPI(authorId: string){
        try {
            const res = await getBookByAuthor(authorId)
            this.setBooks(res?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getBooksOfCategoryAPI(categoryId: string){
        try {
            const res = await getBooksByCategory(categoryId)
            this.setBooks(res?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getBooksOfPublisherAPI(publisherId: string){
        try {
            const res = await getBooksByCategory(publisherId)
            this.setBooks(res?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getBooksSearchAPI(filter: IFilter){
        try {
            const res = await searchBooks(filter)
            this.setBooks(res?.data.data)
        } catch (error) {
            console.log(error)
        }
    }    
    
}



export default BooksStore