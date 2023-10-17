import { createContext, useContext } from "react"
import BooksStore from "./childrens/Books.store"
import AuthorStore from "./childrens/Authors.store"
import CategoryStore from "./childrens/Categorys.store"
import PublisherStore from "./childrens/Publishers.store"
import CartStore from "./childrens/Carts.store"
import UserAccess from "./childrens/UserAccess.store"
import UserManagement from "./childrens/UserManagement.store"

class RootStore {
    BooksStore?: BooksStore
    AuthorStore?: AuthorStore
    CategoryStore?: CategoryStore
    PublisherStore?: PublisherStore
    CartStore?: CartStore
    userAccess?: UserAccess;
    userManagement?: UserManagement;
    constructor(){
        this.userAccess = new UserAccess()
        this.userManagement = new UserManagement(this)
        this.BooksStore = new BooksStore(this)
        this.AuthorStore = new AuthorStore(this)
        this.CategoryStore = new CategoryStore(this)
        this.CartStore = new CartStore(this)
        this.PublisherStore = new PublisherStore(this)
    }
}

export const rootStore = new RootStore()
export type TRootStore = typeof rootStore

const AppContext = createContext<TRootStore>(rootStore)
export const  AppContextProvider = AppContext.Provider
export function useStore(): TRootStore{
    const store = useContext(AppContext)
    return store
}