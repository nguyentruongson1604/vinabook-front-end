import { axiosInstanceOptions, createAxiosInstance } from "../instances/instance"

export interface IBill {
    _id?: any,
    owner?: any,
    name?: string,
    books?: IBooksInBill[],
    phone?: string,
    address?: string,
    totalCost?: number,
    status?: string,
    note?: string
}

export interface IBooksInBill{
    bookId: any,
    price: number,
    quantity: number,
    discount: number
}

export async function createUserBill(data: IBill) {
        const options: axiosInstanceOptions = {
            baseURL: '/api/bill/createUserBill'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.post('/', data)
        return res
}

export async function getAllBillUser(page: number, limit: number, search?: string) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/bill/getAllBillUser/?page=${page}&limit=${limit}&search=${search}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('')
        return res
}

export async function getAllBillAdmin(page: number, limit: number, search?: string) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/bill/getAllBillAdmin/?page=${page}&limit=${limit}&search=${search}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('')
        return res
}

export async function getCurrentBill(_id: string) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/bill/getCurrentBill/${_id}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        return res
}

export async function updateStatusBill(_id: string, data: IBill) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/bill/updateStatusBill/${_id}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.put('/',data)
        return res
}

export async function deleteBill(_id: string) {
        const options: axiosInstanceOptions = {
            baseURL: `/api/bill/deleteBill/${_id}`
        }
        const instance = createAxiosInstance(options)
        const res = await instance.delete('/')
        return res
}