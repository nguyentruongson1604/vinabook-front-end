import { observer } from 'mobx-react';
import styles from './style.module.css';
const PriceContainer = observer(({oldPrice, newPrice}: {oldPrice: number, newPrice: number}) => {
  return (
        <div className={styles.priceContainer}>
            <span className={styles.priceNew}>{newPrice}đ</span>
            <span className={styles.priceOld}>{oldPrice}đ</span>
        </div>
  )
})

export default PriceContainer;