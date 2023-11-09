import { makeAutoObservable } from "mobx";
import { IBill, createUserBill, deleteBill, getAllBillAdmin, getAllBillUser, getCurrentBill, updateStatusBill } from "../../APIs/bill.api";
import { TRootStore } from "../RootStore.store";

class Bill{
    bills: any[] = []
    // historyBill: IBill[] = []
    currenBill: any | undefined = undefined
    rootStore: TRootStore
    constructor(rootStore: TRootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore
    }
    setBills = (bills: IBill[]) => {
        this.bills = bills
    }
    setCurrentBill = (bill: IBill) => {
        this.currenBill = bill
    }

    getCurrentBill = async (_id: string) => {
        try{
            const res = await getCurrentBill(_id)
            const bill = res?.data.data;
            
            this.setCurrentBill(bill)
            const bills: IBill[] = [bill]
            this.setBills(bills)
        }
        catch(error: any) {
            this.setBills([])
            console.log(error.response.data);
        }

    }
    getAllBill = async (page: number, limit: number, search: string) => {
        try {
            const response = await getAllBillAdmin(
                page,
                limit,
                search
            );
            const bills = response?.data.data;            
            this.setBills(bills);
        } catch (error: any) {
          console.log(error.response.data);
        }
    };

    date = (createdAt: any) => {
        const date = new Date(createdAt);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();        
        return `${day}/${month}/${year}`
    }
    get tableData(){                
        return this.bills?.map((item) => {
            return {
                ...item,
                time: this.date(item.createdAt),
                books: item.books.map((book: any)=>{
                    return {
                        ...book,
                        bookName: book.bookId.name,
                    }
                }),
                id: item._id
            }
        })||[]        
    }
    getHistoryBill = async (page: number, limit: number, search: string) => {
        try {
            const response = await getAllBillUser(
                page,
                limit,
                search
            );            
            const bills: IBill[] = response?.data.data;
            this.setBills(bills);
        } catch (error: any) {
          console.log(error.response.data);
        }
    };
    createBill = async (bill: IBill) => {
        try {
            const response = await createUserBill(bill);
            const newBill: IBill = response!.data.data;
            this.setCurrentBill(newBill);
            return { success: true, res: response!.data.data };
        } catch (error) {
            console.log(error);
        }
    };
    updateStatusBill = async (_id: string, data: IBill) => {
        try {
            const response = await updateStatusBill( _id, data);
            const updateBill: IBill = response?.data.data;
            this.bills = this.bills.map((bill) =>
                bill._id === updateBill._id ? { ...bill, ...updateBill } : bill
            );
        } catch (error) {
            console.log(error);
        }
    };
    deleteBill = async (_id: string) => {
        try {
            const response = await deleteBill( _id);
            this.bills = this.bills.filter((bill) => bill._id !== _id);
        } catch (error) {
            console.log(error);
        }
    };
}
export default Bill