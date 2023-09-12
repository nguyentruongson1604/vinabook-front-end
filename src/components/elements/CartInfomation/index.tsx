import style from './style.module.css'

const CartInfomation = () => {
    return(
        <div className={style.CartInfo}>
            <div className={style.title}>TÓM TẮT ĐƠN HÀNG</div>
            <div className={style.info}>
                <table>
                    <tbody>
                        <tr>
                            <td className={style.width60}>Sản phẩm</td>
                            <td className={style.width40}>7</td>
                        </tr>
                        <tr>
                            <td className={style.width60}>Phí vận chuyển</td>
                            <td className={style.width40}>Miễn phí</td>
                        </tr>
                        <tr>
                            <td className={`${style.width60} ${style.bold}`}>TẠM TÍNH</td>
                            <td className={style.width40}>
                                <span className={`${style.green}`}>
                                    2.643.000
                                </span>
                                &nbsp;
                                <span>₫</span>
                            </td>
                        </tr>
                        <tr>
                            <td className={style.right}>
                                <br />
                                <span className={`${style.italic}`}>(Đã bao gồm Thuế VAT và Phí đóng gói cơ bản).</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={style.total}>
                    <div className={`${style.label} ${style.bold}`}>
                    Tổng cộng
                    </div>
                    <div className={style.width40}>
                        <span className={style.bold}>
                            2.643.000
                        </span>
                        &nbsp;
                        <span>₫</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartInfomation;