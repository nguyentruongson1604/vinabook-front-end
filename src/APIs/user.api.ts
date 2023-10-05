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

export async function register(newUser: IUser) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/user/register'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', newUser)
        console.log('register: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function login(userAccount: IUserAccount) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/user/login'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', userAccount)
        console.log("login: ", res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getCurrentUser() {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/user/getCurrentUser'
        }
        const instance = createAxiosInstance(options)
        const res = instance.get('/')
        console.log('currentUser: ', res)
        return res
    } catch (error) {
        console.log(error)
    }
}
