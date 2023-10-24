import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import {getAllPublisher, getPublisherById, getPublishersByCategory} from '../../APIs/publisher.api'

export interface IPublisher{
    name: string,
    info: string
}

export interface IPublisherByCategory{
    categoryId: string,
    listPublisher: IPublisher[]
}

class PublisherStore {
    currentPublisher?: IPublisher
    listPublishers?: IPublisher[] 
    listPublishersByCategory: IPublisherByCategory[] = []
    RootStore?: TRootStore

    constructor(RootStore: TRootStore){
        this.RootStore = RootStore
        makeAutoObservable(this)
    }

    setCurrentPublisher(publisher: IPublisher){
        this.currentPublisher = publisher
    }

    setPublisherCategory(publishers: IPublisherByCategory){
        this.listPublishersByCategory = [...this.listPublishersByCategory, publishers]
    }

    setAllPublishers(publishers: IPublisher[]){
        this.listPublishers = publishers
    }

    get getCurrentPublisher(){
        return this.currentPublisher
    }

    get getAllPublishers(){
        return this.listPublishers
    }

    async getAllPublishersAPI(){
        try {
            const Publishers = await getAllPublisher()
            this.setAllPublishers(Publishers?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getPublisherByIdAPI(publisherId: string) {
        try {
            const publisher = await getPublisherById(publisherId)
            this.setCurrentPublisher(publisher?.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async getPublishersByCategoryAPI(categoryId: string){
        try {
            const publishersCategory = await getPublishersByCategory(categoryId)
            const publisher = {
                categoryId: categoryId,
                listPublisher: publishersCategory?.data.data as IPublisher[]
            } as IPublisherByCategory
            this.setPublisherCategory(publisher)
        } catch (error) {
            console.log(error)
        }
    }
}

export default PublisherStore