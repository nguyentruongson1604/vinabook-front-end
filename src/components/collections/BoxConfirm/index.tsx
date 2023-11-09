import { observer } from 'mobx-react';
import styles from './style.module.css'
import CartInfomation from '../../elements/CartInfomation';
import { useStore } from '../../../stores/RootStore.store';
import { IBookInCart } from '../../../stores/childrens/Carts.store';
import MiniCartConfirmItem from '../../elements/MiniCartConfirmItem';
import TittleBoxConfirm from '../../elements/TittleBoxConfirm/Index';

const BoxConfirm: React.FC<{className?: string }> = observer(({className }) => {
    function getSum (total: number, book: IBookInCart){
        return total + book.quantity * (book.bookId.price! - book.bookId.price! * book.bookId.discount! / 100);
    }
    const store = useStore()
    const cartItems1 = store.CartStore?.getCurrentCart.listBook
    const total = cartItems1?.reduce(getSum, 0)

    const cartItems = store.CartStore?.getCurrentCart.listBook || []

    const dataFromLocalStorage  = localStorage.getItem("adress")
    const dataAdress = JSON.parse(dataFromLocalStorage!)

    return (
        <>
            <div className={styles.boxConfirm}>    
                <div className={styles.leftBox}> 
                    <TittleBoxConfirm tittle='sản phẩm' linkTo='/checkout' className={styles.tittleBoxLeft}/>
                    <div className={styles.confirmCart}> 
                        {cartItems.map((item: IBookInCart)=>{
                            return <MiniCartConfirmItem cartItem={item} key={item.bookId._id}/>
                        })}
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.confirmBox}>
                        <TittleBoxConfirm tittle='địa chỉ giao hàng' linkTo='/adressBill' className={styles.tittleAdress}/>
                        <div className="adress">
                            <p>{JSON.parse(dataFromLocalStorage!) ? dataAdress.name : ''}</p>
                            <p> {JSON.parse(dataFromLocalStorage!) ? dataAdress.phone : ''}</p>
                            <p>{JSON.parse(dataFromLocalStorage!) ? dataAdress.address : ''}</p>
                        </div>

                        <TittleBoxConfirm tittle='ghi chú giao hàng'  className={styles.tittleBoxRight}/>
                        <div className="note">
                            <p>Thời gian giao hàng dự kiến 1-3 ngày</p>
                            <p>{JSON.parse(dataFromLocalStorage!) ? dataAdress.note : ''}</p>
                        </div>

                        <TittleBoxConfirm tittle='hình thức thanh toán' className={styles.tittleBoxRight}/>
                        <div className="pay">
                            <p>Thanh toán bằng tiền mặt khi nhận hàng</p>
                        </div>

                        <TittleBoxConfirm tittle='dịch vụ bọc sách'  className={styles.tittleBoxRight}/>
                    </div>
                    <div className={styles.confirmBill}>
                        <CartInfomation quantity={cartItems1?.length!} total={total!}/>
                    </div>
                </div>   
            </div>
        </>
    )
});
  
export default BoxConfirm