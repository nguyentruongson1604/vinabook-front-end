import { createContext, useContext } from "react"
import BooksStore from "./childrens/Books.store"
import AuthorStore from "./childrens/Authors.store"
import CategoryStore from "./childrens/Categorys.store"
import PublisherStore from "./childrens/Publishers.store"
import CartStore from "./childrens/Carts.store"

class RootStore {
    BooksStore?: BooksStore
    AuthorStore?: AuthorStore
    CategoryStore?: CategoryStore
    PublisherStore?: PublisherStore
    CartStore?: CartStore
    constructor(){
        this.BooksStore = new BooksStore(this)
        this.AuthorStore = new AuthorStore(this)
        this.CategoryStore = new CategoryStore(this)
        this.CartStore = new CartStore(this)
        this.PublisherStore = new PublisherStore(this)
    }
}

const rootStore = new RootStore()
export type TRootStore = typeof rootStore

const AppContext = createContext<RootStore>(rootStore)
export const  AppContextProvider = AppContext.Provider
export function useStore(): RootStore{
    const store = useContext(AppContext)
    return store
}