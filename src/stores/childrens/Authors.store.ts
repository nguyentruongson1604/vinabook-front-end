import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import { getAllAuthors, getAuthorById, getAuthorsByCategory } from "../../APIs/author.api"

export interface IAuthor{
    name: string,
    info: string
}

class AuthorStore {
    currentAuthor?: IAuthor
    listAuthors?: IAuthor[] 
    RootStore?: TRootStore

    constructor(RootStore: TRootStore){
        this.RootStore = RootStore
        makeAutoObservable(this)
    }

    setCurrentAuthor(author: IAuthor){
        this.currentAuthor = author
    }

    get getCurrentAuthor(){
        return this.currentAuthor
    }

    get getAllAuthors(){
        return this.listAuthors
    }

    async getAllAuthorsAPI(){
        try {
            const authors = await getAllAuthors()
            this.listAuthors = authors?.data.data
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
            this.listAuthors = authorsCategory?.data.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default AuthorStore