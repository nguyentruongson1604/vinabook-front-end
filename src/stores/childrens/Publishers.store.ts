import { makeAutoObservable } from "mobx"
import { TRootStore } from "../RootStore.store"
import {getAllPublisher, getPublisherById, getPublishersByCategory} from '../../APIs/publisher.api'

export interface IPublisher{
    name: string,
    info: string
}

class PublisherStore {
    currentPublisher?: IPublisher
    listPublishers?: IPublisher[] 
    RootStore?: TRootStore

    constructor(RootStore: TRootStore){
        this.RootStore = RootStore
        makeAutoObservable(this)
    }

    setCurrentPublisher(publisher: IPublisher){
        this.currentPublisher = publisher
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
            this.listPublishers = Publishers?.data.data
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
            const PublishersCategory = await getPublishersByCategory(categoryId)
            this.listPublishers = PublishersCategory?.data.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default PublisherStore