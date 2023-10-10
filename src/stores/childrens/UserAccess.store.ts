import axios from "axios";
import { makeAutoObservable } from "mobx";
import { changePassword, login, register } from "../../APIs/user.api";

export interface IUserAccess{
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

    userLogin = async (userInput: { email: string; password: string }) => {
        try {
            const response = await login(userInput);            
            // const {refreshToken,accessToken} = response.data
            // localStorage.setItem("accessToken", accessToken)
            // localStorage.setItem("refreshToken", refreshToken)
            if(response)
                return { success: true, res: response.data };
            else
            return { success: false, res: 'khong thay tai khoan' };
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
            const response = await register(account);
            return { success: true, res: response?.data };
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    };

    changePassword = async (data: object) => {
        try {
            const response = await changePassword(data);
            return { success: true, res: response?.data };
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    };

}
export default UserAccess