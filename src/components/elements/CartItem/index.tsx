import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { IBookInCart } from '../../../stores/childrens/Carts.store';
import { useStore } from '../../../stores/RootStore.store';

const CartItem = ({cartItem}: {cartItem: IBookInCart}) => {
    const store = useStore()
    const newPrice = cartItem.bookId.price! - cartItem.bookId.price! * cartItem.bookId.discount! / 100;
    const [quantity, setQuantity] = useState<number>(cartItem.quantity)

    return(
        <tr className={style.cartItem}>
            <td>
                <input type="hidden" name='product-id' value={cartItem.bookId._id} />
            </td>
            <td style={{width: '8%'}}>
                <div  className={style.thumbImage}>
                    <a href="#">
                        <img src={cartItem.bookId.imageUrl} alt="thumb" />
                    </a>
                </div>
            </td>
            <td>
                <p  className={style.title}>
                    {cartItem.bookId.name}
                </p>
                <div className={style.inputGroup}>
                    <button type="button" onClick={()=>{
                        if(quantity > 1){
                            setQuantity(quantity - 1)
                            store.CartStore?.removeOneBookFromCart(cartItem.bookId._id)
                       }
                    }}>-</button>
                    <input type="number" name="amount" value={quantity} onChange={()=>{}}/>
                    <button type="button" onClick={()=>{
                        if(quantity < cartItem.bookId.quantity!){
                            setQuantity(quantity + 1)
                            store.CartStore?.addBookToCart(cartItem)
                        }
                    }}>+</button>
                </div>
            </td>
            <td className={style.labelPrice}>
                <p>
                    <span>{quantity}</span>
                    &nbsp;x&nbsp;
                    <span>{newPrice}</span>
                    &nbsp;
                    <span>đ</span>
                </p>
                <FontAwesomeIcon icon={faTrash} className={style.icon} onClick={()=>{store.CartStore?.deleteBookFromCart(cartItem.bookId._id)}}/>
            </td>
        </tr>
    )
}

export default CartItem;