import { axiosInstanceOptions, createAxiosInstance } from "../instances/instance"

export interface ICategory {
    name?: string,
}

export async function getAllCategory() {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/category/all-category'
        }
        const instance = createAxiosInstance(options)
        const res = await instance.get('/')
        console.log('all category: ', res)

        return res
    } catch (error) {
        console.log(error)
    }
}

export async function newCategory(newCategory: ICategory) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: '/api/v1/category/new-category'
        }
        const instance = createAxiosInstance(options)
        const res =  await instance.post('/', newCategory)
        console.log('new category: ',res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function updateCategory(newCategory: ICategory, categoryId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/category/${categoryId}`
        }
        const instance = createAxiosInstance(options)
        const res =  await instance.put('/', newCategory)
        console.log('update category: ',res)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteCategory(categoryId: string) {
    try {
        const options: axiosInstanceOptions = {
            baseURL: `/api/v1/category/${categoryId}`
        }
        const instance = createAxiosInstance(options)
        const res =  await instance.delete('/')
        console.log('delete category', res)
        return res
    } catch (error) {
        console.log(error)
    }
}