import { makeAutoObservable } from "mobx";
import { IBill, createUserBill, deleteBill, getAllBillAdmin, getAllBillUser, getCurrentBill, updateStatusBill } from "../../APIs/bill.api";
import { TRootStore } from "../RootStore.store";

class Bill{
    bills: IBill[] = []
    // historyBill: IBill[] = []
    currenBill: IBill | undefined = undefined
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
    // setHistoryBill = (historyBill: IBill[]) => {
    //     this.historyBill = historyBill
    // }

    getCurrentBill = async (_id: string) => {
        const res = await getCurrentBill(_id)
        const bill: IBill = res?.data.data;
        this.setCurrentBill(bill)
    }
    getAllBill = async (page: number, limit: number, search: string) => {
        try {
            const response = await getAllBillAdmin(
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