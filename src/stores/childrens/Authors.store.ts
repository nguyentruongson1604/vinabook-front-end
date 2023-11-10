import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import { getAllAuthors, getAuthorById, getAuthorsByCategory } from "../../APIs/author.api"

export interface IAuthor{
    _id?: string
    name: string,
    info: string,
    createdAt?: string
}

export interface IAuthorByCategory{
    categoryId: string,
    listAuthor: IAuthor[]
}

class AuthorStore {
    currentAuthor?: IAuthor
    listAuthors?: IAuthor[]
    listAuthorsByCategory: IAuthorByCategory[] = []
    RootStore?: TRootStore

    constructor(RootStore: TRootStore){
        this.RootStore = RootStore
        makeAutoObservable(this)
    }

    setCurrentAuthor(author: IAuthor){
        this.currentAuthor = author
    }

    setAllAuthors(authors: IAuthor[]){
        this.listAuthors = authors
    }

    addAuthor(author: IAuthor){
        this.listAuthors = [...this.listAuthors!, author]
    }

    setAuthorsCategory(author: IAuthorByCategory){
        this.listAuthorsByCategory = [...this.listAuthorsByCategory, author]
    }

    get getCurrentAuthor(){
        return this.currentAuthor
    }

    get getAllAuthors(){
        return this.listAuthors
    }

    get getAuthorsCategory(){
        return this.listAuthorsByCategory
    }

    async getAllAuthorsAPI(){
        try {
            const authors = await getAllAuthors()
            this.setAllAuthors(authors?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getAuthorByIdAPI(authorId: string) {
        try {
            const author = await getAuthorById(authorId)
            this.setCurrentAuthor(author?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getAuthorsByCategoryAPI(categoryId: string){
        try {
            const authorsCategory = await getAuthorsByCategory(categoryId)
            const author = {
                categoryId: categoryId,
                listAuthor: authorsCategory?.data.data as IAuthor[]
            } as IAuthorByCategory
            this.setAuthorsCategory(author)
        } catch (error) {
            console.log(error)
        }
    }
}

export default AuthorStore