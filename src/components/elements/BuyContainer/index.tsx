import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function BuyContainer() {
  return (
        <div className={styles.buyContainer}>
            <span className={styles.buyContainerTitle}>
                <FontAwesomeIcon icon={faShoppingCart} className={styles.iconShoppingCart} />
                MUA NGAY
            </span>
        </div>
  )
}

export default BuyContainer;