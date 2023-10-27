import { observer } from 'mobx-react';
import styles from './style.module.css';
const ProductThumbSale = observer(({discount}: {discount: number}) => {
  return (
        <div className={styles.productThumbSale}>
            -{discount}%
        </div>
  )
})

export default ProductThumbSale;