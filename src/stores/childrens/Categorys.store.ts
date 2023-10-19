import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import {getAllCategory, getCategoryById} from '../../APIs/category.api'

export interface ICategory{
    name: string
}

class CategoryStore {
    currentCategory?: ICategory
    listCategories?: ICategory[] 
    RootStore?: TRootStore

    constructor(RootStore: TRootStore){
        this.RootStore = RootStore
        makeAutoObservable(this)
    }

    setCurrentCategory(category: ICategory){
        this.currentCategory = category
    }

    setAllCategories(categories: ICategory[]){
        this.listCategories = categories
    }

    get getCurrentCategory(){
        return this.currentCategory
    }

    get getAllCategories(){
        return this.listCategories
    }

    async getAllCategorysAPI(){
        try {
            const categories = await getAllCategory()
            this.setAllCategories(categories?.data.allCategory)
        } catch (error) {
            console.log(error)
        }
    }

    async getCategoryByIdAPI(categoryId: string) {
        try {
            const category = await getCategoryById(categoryId)
            this.setCurrentCategory(category?.data.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export default CategoryStore