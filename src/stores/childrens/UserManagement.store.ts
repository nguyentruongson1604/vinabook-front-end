import { makeAutoObservable } from "mobx";
import { IUserAccess } from "./UserAccess.store";
import { IUser, createOtherInfo, deleteOtherUser, getAllUser, updateOtherUser } from '../../APIs/user.api';
import { TRootStore } from "../RootStore.store";

class UserManagement {
    usersManagemant: IUserAccess[] = []
    rootStore: TRootStore
    constructor(rootStore: TRootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore
    }
    createOtherInfo = async (account: IUserAccess) => {
        try {
            const response = await createOtherInfo(account);            
            this.usersManagemant = [...this.usersManagemant, response.data.data]
            return { success: true, res: response?.data };
        } catch (error: any) {
            return { success: false, res: error.response.data };
        }
    };
    setUsersManagemant = (usersManagemant: IUserAccess[]) =>{
        this.usersManagemant = usersManagemant
    }
    updateOtherUser = async (_id: string, data: IUser) =>{
        try {
            const response = await updateOtherUser(_id,data)
            const updateUser = response?.data.data;
            this.usersManagemant = this.usersManagemant.map((userManagemant) =>
                userManagemant._id === updateUser._id ? { ...userManagemant, ...updateUser } : userManagemant
            );
            return { status: true, message: "Success!!" };
        } catch (error: any) {
            return { status: false, message: error.response.data.message };
        }
    }
    deleteOtherUser = async (_id: string) => {
        try {
            await deleteOtherUser(_id);
            this.usersManagemant = this.usersManagemant.filter((userManagemant) => userManagemant._id !== _id);
        } catch (error) {
            console.log(error);
        }
    };
    getAllUser = async (page: number, limit: number, search?: string) => {
        try {

            const response = await getAllUser(
                page,
                limit,
                search
            );            
            const users: IUserAccess[] = response?.data.data;            
            this.setUsersManagemant(users);
            
        } catch (error) {
            console.log(error);
        }
    };

    get tableData(){
        return this.usersManagemant?.map(item => {
            return {...item, id: item._id}
        })||[]
    }
}
export default UserManagement