/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-redeclare */
import MiniCartItem from '../../elements/MiniCartItem'
import style from './style.module.css'
import { observer } from 'mobx-react'
import { IBookInCart } from '../../../stores/childrens/Carts.store'
import { Link, useNavigate } from 'react-router-dom'

const HomeCart = observer(({closeCart, cartItems}: {closeCart: (isOpenCart: boolean) => void, cartItems: IBookInCart[]}) => {
    const navigate = useNavigate()
    function getSum (total: number, book: IBookInCart){
        return total + book.quantity * (book.bookId.price! - book.bookId.price! * book.bookId.discount! / 100);
    }
    const total = cartItems.reduce(getSum, 0)
    return(
        <div className={style.homeCart}>
            {
                cartItems.length > 0 ? 
                <>
                    <div className={style.listCart}>
                        <table className={style.listMiniItem}>
                            <tbody>
                                {cartItems.map((item: IBookInCart)=>{
                                    return <MiniCartItem cartItem={item} key={item.bookId._id}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={style.fullCart}>
                        <div className={style.totalCart}>
                            Tổng cộng:&nbsp;
                            <span className={style.totalCost}>{total}&nbsp;₫</span>
                        </div>
                        <div className={style.cartButton}>
                            <span className={style.button}>
                                <a href='' onClick={()=>{closeCart(false); navigate('checkout')}}>Xem giỏ hàng</a>
                                {/* <Link to='checkout' onClick={()=>{closeCart(false)}} >Xem giỏ hàng</Link> */}
                            </span>
                        </div>
                    </div>
                </> : 
                <div style={{fontSize: 30, display: 'flex', justifyContent:'center', alignItems: 'center' ,textAlign:'center', height: '200px', color: '#d7dae4'}}><p>Không có sản phẩm</p></div>
            }
        </div>
    )
})

export default HomeCart