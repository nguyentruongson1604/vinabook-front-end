import styles from './style.module.css';
function PriceContainer() {
  return (
        <div className={styles.priceContainer}>
            <span className={styles.priceNew}>185.000đ</span>
            <span className={styles.priceOld}>218.000đ</span>
        </div>
  )
}

export default PriceContainer;