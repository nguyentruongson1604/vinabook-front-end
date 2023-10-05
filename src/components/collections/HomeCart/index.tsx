import { Link } from 'react-router-dom'
import MiniCartItem from '../../elements/MiniCartItem'
import style from './style.module.css'

const HomeCart = ({closeCart}: {closeCart: (isOpenCart: boolean) => void}) => {
    return(
        <div className={style.homeCart}>
            <div className={style.listCart}>
                <table className={style.listMiniItem}>
                    <tbody>
                        <MiniCartItem />
                        <MiniCartItem />
                        <MiniCartItem />
                        <MiniCartItem />
                        <MiniCartItem />
                        <MiniCartItem />
                        <MiniCartItem />
                        <MiniCartItem />
                    </tbody>
                </table>
            </div>
            <div className={style.fullCart}>
                <div className={style.totalCart}>
                    Tổng cộng:&nbsp;
                    <span className={style.totalCost}>2.643.000&nbsp;₫</span>
                </div>
                <div className={style.cartButton}>
                    <span className={style.button}>
                        <Link to='checkout' onClick={()=>{closeCart(false)}}>Xem giỏ hàng</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HomeCart