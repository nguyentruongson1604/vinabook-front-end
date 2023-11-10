import Nav from '../../templates/Nav';
import styles from './style.module.css'
import BoxConfirm from '../../collections/BoxConfirm';
import { Link, useNavigate } from 'react-router-dom';
import {
    Button,
  } from "@mui/material";
import { useStore } from '../../../stores/RootStore.store';
const CofirmBillPage: React.FC<{className?: string }> = ({className }) => {
    const navigate = useNavigate()
    const store = useStore()
    const handleSubmit = async () => {
        const data = await store.CartStore?.getCurrentCart
        const dataFromLocalStorage  = localStorage.getItem("adress")
        const dataAdress = JSON.parse(dataFromLocalStorage!)
        const newData = data?.listBook.map((book)=>{
          return{
            bookId: book.bookId,
            quantity: book.quantity,
            discount: book.bookId.discount!,
            price: book.bookId.price!,
          }
        })
        const convertData = {
          books: newData
        }         
        const dataBill = {...dataAdress, ...convertData}
        await store.billStore?.createBill(dataBill)
        await store.CartStore?.clearCartAPI()
        // navigate('/noticeSuccess')
        navigate(`/noticeSuccess/${store.billStore?.currenBill?._id}`)
    }
    const handleBack = ()=>{
        navigate(`/adressbill/`)
    }
    return (
        <>
            <Nav appear={false}/>
            
            <div className="container">
                <div className={styles.logo}>
                    <img width="252" height="33" src="https://www.vinabook.com/images/thumbnails/img/252/33/vnb_logo_2x.png"/>
                </div>
                <div className={styles.tittle}>
                XÁC NHẬN & ĐẶT HÀNG
                </div>
                <BoxConfirm/>
                <div className={styles.boxBtn}>
                    <div className={styles.boxBtnLeft}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={styles.buttonBack}
                                onClick={handleBack}
                            >
                                Quay lại
                            </Button>
                    </div>

                    <div className={styles.boxBtnRight}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={styles.buttonPay}
                            onClick={handleSubmit}
                        >
                            Đặt hàng
                        </Button>
                    </div>
                </div>
                </div>
            <div className="clearfix"></div>
        </>
    )
};
  
export default CofirmBillPage