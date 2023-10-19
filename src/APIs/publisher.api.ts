import { axiosInstanceOptions, createAxiosInstance } from "../instances/instance"

export interface IPublisher {
    _id?: string
    name?: string,
}

export async function getAllPublisher() {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/publisher/all-publisher'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        // console.log('all Publisher: ', res)

        return res
    } catch (error) {
        console.log(error)
    }
}

export async function newPublisher(newPublisher: IPublisher) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/publisher/new-publisher'
        }
        const instance = createAxiosInstance(options)
        const res =  await instance.post('/', newPublisher)
        // console.log('new Publisher: ',res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function updatePublisher(newPublisher: IPublisher, publisherId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/publisher/${publisherId}`
        }
        const instance = createAxiosInstance(options)
        const res =  await instance.put('/', newPublisher)
        // console.log('update Publisher: ',res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deletePublisher(publisherId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/publisher/${publisherId}`
        }
        const instance = createAxiosInstance(options)
        const res =  await instance.delete('/')
        // console.log('delete Publisher', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getPublishersByCategory(categoryId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/publisher/category/${categoryId}`
        }
        const instance =  createAxiosInstance(options);
        const res = await instance.get('/')
        // console.log(`publisher ${categoryId}: `, res.data)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getPublisherById(publisherId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/publisher/${publisherId}`
        }
        const instance =  createAxiosInstance(options);
        const res = await instance.get('/')
        // console.log(`publisher ${publisherId}: `, res)
        return res
    } catch (error) {
        console.log(error)
    }
}