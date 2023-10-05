import {axiosInstanceOptions, createAxiosInstance} from '../instances/instance'

export interface IAuthor{
    name?: string,
    info?: string
}

export async function createNewAuthor(newAuthor: IAuthor){
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/author/new-author'
        }
    
        const instance =  createAxiosInstance(options);
        const res = await instance.post('/', newAuthor)
        console.log('new author: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getAllAuthors() {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/author/all-author'
        }
        const instance =  createAxiosInstance(options);
        const res = await instance.get('/')
        console.log('all author: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getAuthorById(authorId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `api/v1/author/${authorId}`
        }
        const instance =  createAxiosInstance(options);
        const res = await instance.get('/')
        console.log(`author ${authorId}: `, res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function updateAuthor(newAuthor: IAuthor, authorId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `api/v1/author/${authorId}`
        }
    
        const instance =  createAxiosInstance(options);
        const res = await instance.put('/', newAuthor)
        console.log('new author updated: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteAAuthor(authorId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `api/v1/author/${authorId}`
        }
        const instance =  createAxiosInstance(options);
        const res = await instance.delete('/')
        console.log(`author ${authorId}: `, res)
        return res
    } catch (error) {
        console.log(error)
    }
}