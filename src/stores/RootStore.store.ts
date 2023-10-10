import UserAccess from "./childrens/UserAccess.store";
import UserManagement from "./childrens/UserManagement.store";



export class RootStore{
    userAccess: UserAccess;
    userManagement: UserManagement;
    constructor(){
        this.userAccess = new UserAccess()
        this.userManagement = new UserManagement(this)
    }
}