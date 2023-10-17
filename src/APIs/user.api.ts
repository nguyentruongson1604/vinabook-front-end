import { log } from "console"
import { axiosInstanceOptions, createAxiosInstance } from "../instances/instance"

export interface IUser{
    name?: string,
    email?: string,
    password?: string,
    role?: string,
}

export interface IUserAccount {
    email: string,
    password: string
}

//createAxiosInstance đã có sẵn token

export async function register(newUser: IUser) {
        const options: axiosInstanceOptions = {
            baseURL: '/api/user/register'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', newUser)
        return res
}

export async function login(userAccount: IUserAccount) {
        const options: axiosInstanceOptions = {
            baseURL: '/api/user/login'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', userAccount)
        return res
}

export async function getCurrentUser() {
    const options: axiosInstanceOptions = {
        baseURL: '/api/user/getCurrentUser'
    }
    const instance = createAxiosInstance(options)
    const res = await instance.get('/') 
    return res
}


export async function changePassword(data: {currentPassword: string, newPassword: string}) {    
        const options: axiosInstanceOptions = {
            baseURL: '/api/user/changePassword'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.put('/', data)        
        return res

}


//user manager
export async function getAllUser(page: number, limit: number, search?: string) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/getAllUser?page=${page}&limit=${limit}&search=${search}`
            
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        return res
}

export async function updateOtherUser(_id: string, data: IUser) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/user/otherUser/${_id}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.put('/', data)
        return res
}

export async function deleteOtherUser(_id: string) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/user/otherUser/${_id}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.delete('/')
        return res
}

export async function getOtherUser(_id: string) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/user/otherUser/${_id}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        return res
}
