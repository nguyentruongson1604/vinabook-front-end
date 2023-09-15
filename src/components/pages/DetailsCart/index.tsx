import CartInfomation from '../../elements/CartInfomation'
import CartItem from '../../elements/CartItem'
import Logo from '../../elements/Logo'
import style from './style.module.css'

const DetailsCart = () => {
    return(
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
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                        <CartItem id='abc' title='Sach' price={100000} amount={1} />
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                    <div className={style.rightSide}>
                        <CartInfomation />
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className={style.payment}>
                    <a href="#" className={style.btnPay}>Thanh toán</a>
                    <a href="#" className={style.btnBack}>Quay lại</a>
                </div>
            </div>
        </div>
    )
}

export default DetailsCart
