/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style.module.css'
import { observer } from 'mobx-react'
import { IBookInCart } from '../../../stores/childrens/Carts.store'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { useStore } from '../../../stores/RootStore.store'

const MiniCartItem = observer(({cartItem}: {cartItem: IBookInCart}) => {
    const store = useStore()
    const navigate = useNavigate()
    return(
        <tr className={style.miniCartItem}>
            <td className={style.productImage}>
                <img src={cartItem.bookId.imageUrl} alt="" />
            </td>
            <td>
                <a href="" className={style.title} onClick={()=>{navigate(`/details/${cartItem.bookId._id}`)}}>{cartItem.bookId.name}</a>
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
            <td className={style.miniCartItemDelete}>
                <a>
                    <FontAwesomeIcon icon={faRemove} className={style.remove} onClick={()=>{store.CartStore?.deleteBookFromCart(cartItem.bookId._id)}}></FontAwesomeIcon>
                </a>
            </td>
        </tr>
    )
})

export default MiniCartItem