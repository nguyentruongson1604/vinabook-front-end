import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style.module.css'
import { faBicycle, faDeleteLeft, faRecycle, faRemove } from '@fortawesome/free-solid-svg-icons'

const MiniCartItem = () => {
    return(
        <tr className={style.miniCartItem}>
            <td className={style.productImage}>
                <img src="https://www.vinabook.com/images/thumbnails/product/40x0/372082_p96269m8935270703554.jpg" alt="" />
            </td>
            <td>
                <a href="#" className={style.title}>Sapiens Lược Sử Loài Người</a>
                <p>
                    <span>1</span>
                    <span>&nbsp;x&nbsp;</span>
                    <span className={style.price}>
                        <span>254.000</span>
                        &nbsp;
                        <span className="none">₫</span>
                    </span>
                </p>
            </td>
            <td className={style.miniCartItemDelete}>
                <a href="#">
                    <FontAwesomeIcon icon={faRemove} className={style.remove}></FontAwesomeIcon>
                </a>
            </td>
        </tr>
    )
}

export default MiniCartItem