import axios from "axios";
import { makeAutoObservable } from "mobx";

interface IUserAccess{
    _id?: string
    name?: string
    email?: string
    role?: string
}

class UserAccess {
    userAccess: IUserAccess | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }

    setUserAccess = (user: IUserAccess | undefined) => {
        this.userAccess = user;
    };

    getToken = () :string|null => {
        return localStorage.getItem("token") 
    };

    userLogin = async (userInput: { email: string; password: string }) => {
        try {
            const option = {
                method: 'post',
                url: "/api/user/login",
                data: userInput,
            }
            const response = await axios(option)
            // const {refreshToken,accessToken} = response.data
            // localStorage.setItem("accessToken", accessToken)
            // localStorage.setItem("refreshToken", refreshToken)
            return { success: true, res: response.data };
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    };

    userRegister = async (account: {
        email: string;
        name: string;
        password: string;
    }) => {
        try {
            const option = {
                method: 'post',
                url: "/api/user/register",
                data: account,
            }
            const response = await axios(option)

            return { success: true, res: response.data };
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    };

    changePassword = async (data: object) => {
        try {
            const option = {
                method: 'put',
                url: "/api/user/changePassword",
                data: data,
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                }
            }
            const response = await axios(option)

            return { success: true, res: response.data };
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    };


}