import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../../stores/RootStore.store';
import { IBook } from '../../../stores/childrens/Books.store';
import { IBookCart } from '../../../stores/childrens/Carts.store';
function BuyContainer({book}: {book: IBook}) {
  const store = useStore()
  const handleAddBook = () => {
    const bookCart: IBookCart = {
        _id: book?._id!,
        name: book?.name!,
        imageUrl: book?.imageUrl!,
        price: book?.price,
        discount: book?.discount
    }
    store.CartStore?.addBookToCart({bookId: bookCart, quantity: 1})
}
  return (
        <div className={styles.buyContainer}>
            <span className={styles.buyContainerTitle} onClick={()=>{handleAddBook()}}>
                <FontAwesomeIcon icon={faShoppingCart} className={styles.iconShoppingCart} />
                MUA NGAY
            </span>
        </div>
  )
}

export default BuyContainer;