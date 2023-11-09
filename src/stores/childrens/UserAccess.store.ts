import { makeAutoObservable } from "mobx";
import { changePassword, getCurrentUser, login, register } from "../../APIs/user.api";

export interface IUserAccess{
    _id?: string
    name?: string
    email?: string
    role?: string
    password?: string
    isNew? :boolean
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
            return { success: true, res: response?.data };
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

    getCurrentUser= async () =>{
        try {
            const response = await getCurrentUser();
            this.setUserAccess(response.data.data)            
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    }

    changePassword = async (data: {currentPassword: string, newPassword: string}) => {
        try {
            const response = await changePassword(data);            
            this.setUserAccess({ ...this.userAccess, ...response.data.data })
            return { success: true, res: response?.data };
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    };
    get user(){
        return this.userAccess
    }
}
export default UserAccess