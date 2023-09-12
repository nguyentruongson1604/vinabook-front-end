import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const CartItem = ({id, title, price, amount}: {id: string, title: string, price: number, amount: number}) => {
    const [quantity, setQuantity] = useState<number>(amount)

    return(
        <tr className={style.cartItem}>
            <td>
                <input type="hidden" name='product-id' value={id} />
            </td>
            <td style={{width: '8%'}}>
                <div  className={style.thumbImage}>
                    <a href="#">
                        <img src="https://www.vinabook.com/images/thumbnails/product/43x/372082_sapiens-luoc-su-loai-nguoi.jpg" alt="thumb" />
                    </a>
                </div>
            </td>
            <td>
                <p  className={style.title}>
                    {title}
                </p>
                <div className={style.inputGroup}>
                    <button type="button" onClick={()=>{
                        if(quantity > 1)
                            setQuantity(quantity - 1)
                    }}>-</button>
                    <input type="number" name="amount" value={quantity} onChange={()=>{}}/>
                    <button type="button" onClick={()=>{
                        setQuantity(quantity + 1)
                    }}>+</button>
                </div>
            </td>
            <td className={style.labelPrice}>
                <p>
                    <span>{quantity}</span>
                    &nbsp;x&nbsp;
                    <span>{price}</span>
                    &nbsp;
                    <span>đ</span>
                </p>
                <FontAwesomeIcon icon={faTrash} className={style.icon}/>
            </td>
        </tr>
    )
}

export default CartItem;