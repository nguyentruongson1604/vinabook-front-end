import style from './style.module.css'
import { observer } from 'mobx-react'
import { IBookInCart } from '../../../stores/childrens/Carts.store'
import { useNavigate } from 'react-router'
import { useStore } from '../../../stores/RootStore.store'

const MiniCartConfirmItem = observer(({cartItem}: {cartItem: IBookInCart}) => {
    const store = useStore()
    return(
        <tr className={style.miniCartItem}>
            <td className={style.productImage}>
                <img src={cartItem.bookId.imageUrl} alt="" />
            </td>
            <td className={style.titleBox}>
                <div className={style.title}>{cartItem.bookId.name}</div>
                <p>
                    <span>{cartItem.quantity}</span>
                    <span>&nbsp;x&nbsp;</span>
                    <span className={style.price}>
                        <span>{(cartItem.bookId.price! - cartItem.bookId.price! * cartItem.bookId.discount! / 100)}</span>
                        &nbsp;
                        <span className="none">₫</span>
                    </span>
                </p>
            </td>
        </tr>
    )
})

export default MiniCartConfirmItem