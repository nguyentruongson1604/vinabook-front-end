import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import {getAllCategory, getCategoriesAndRelation, getCategoryById} from '../../APIs/category.api'
import { IAuthor } from "../../APIs/author.api"
import { IPublisher } from "../../APIs/publisher.api"


export interface ICategory{
    _id?: any
    name?: string
}

export interface ICategoryAndRelation{
    _id: string,
    name: string,
    books: number,
    authors: IAuthor[],
    publishers: IPublisher[]
}
class CategoryStore {
    currentCategory?: ICategory
    listCategories?: ICategory[]
    RootStore?: TRootStore
    categoriesAndRelation: ICategoryAndRelation[] = []

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

    setCategoriesAndRelation(catergories: ICategoryAndRelation[]){
        this.categoriesAndRelation = [...catergories]
    }

    addNewCategory(category: ICategory){
        this.listCategories = [category, ...this.listCategories! ]
    }

    get getCategoriesAndRelation(){
        return this.categoriesAndRelation
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

    async getCategoriesAndRelationAPI() {
        try {
            const categoriesRelation = await getCategoriesAndRelation()
            this.setCategoriesAndRelation(categoriesRelation?.data.allCategory as ICategoryAndRelation[])
        } catch (error) {
            console.log(error)
        }
    }
}

export default CategoryStore