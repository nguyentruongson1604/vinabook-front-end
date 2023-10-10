import { RootStore } from './../RootStore.store';
import { makeAutoObservable } from "mobx";
import { IUserAccess } from "./UserAccess.store";
import { IUser, deleteOtherUser, getAllUser, updateOtherUser } from '../../APIs/user.api';

class UserManagement {
    usersManagemant: IUserAccess[] = []
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore
    }
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
            console.log(error.response.data);
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
}
export default UserManagement