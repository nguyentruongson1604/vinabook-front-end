/* eslint-disable jsx-a11y/anchor-is-valid */
import { observer } from 'mobx-react'
import CartInfomation from '../../elements/CartInfomation'
import CartItem from '../../elements/CartItem'
import Logo from '../../elements/Logo'
import style from './style.module.css'
import { useStore } from '../../../stores/RootStore.store'
import { IBookInCart } from '../../../stores/childrens/Carts.store'
import { Link } from 'react-router-dom'

const DetailsCart = observer(() => {
    function getSum (total: number, book: IBookInCart){
        return total + book.quantity * (book.bookId.price! - book.bookId.price! * book.bookId.discount! / 100);
    }

    const store = useStore()
    const cartItems = store.CartStore?.getCurrentCart.listBook
    const total = cartItems?.reduce(getSum, 0)
    return(
        <>
            <div className='container'>
            <div className={style.logoCart}>
                <Logo/>
            </div>
            <div className="clearfix"></div>
            <div className={style.body}>
                <div className={style.titleCart}>GIỎ HÀNG</div>
                <div className={style.mainBox}>
                    <div className={style.leftSide}>
                        <div className={style.boxListCart}>
                            <form action="" method='POST'>
                                <table>
                                    <thead>
                                        <tr><th colSpan={3}>SẢN PHẨM</th></tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems && cartItems.map((cartItem: IBookInCart)=>{
                                                return <CartItem key={cartItem.bookId._id} cartItem={cartItem} />
                                            })
                                        }
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                    <div className={style.rightSide}>
                        <CartInfomation quantity={cartItems?.length!} total={total!}/>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className={style.payment}>
                    {cartItems?.length == 0 ? (
                        <Link to='/adressbill' className={`${style.btnPay} ${style.linkDisabled}`}  >
                            Thanh toán
                        </Link>
                    ) : (
                        <Link to='/adressbill' className={style.btnPay}>
                            Thanh toán
                        </Link>
                    )}
                    <Link to='/' className={style.btnBack}>Quay lại</Link>
                </div>
            </div>
        </div>
        </>
    )
})

export default DetailsCart
