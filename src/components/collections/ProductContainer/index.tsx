import styles from './style.module.css';
import ProductThumbTitle from '../../elements/ProductThumbTitle';
import ProductThumbImg from '../../elements/ProductThumbImg';
import ProductThumbSale from '../../elements/ProductThumbSale';
import ProductText from '../../elements/ProductText';
import AuthorWrap from '../../elements/AuthorWrap';
import PriceContainer from '../../elements/PriceContainer';
import BuyContainer from '../../elements/BuyContainer';
import ShortDescription from '../../elements/ShortDescription';
const ProductContainer =() => {
  return (
        <div className={styles.productContainer}>
            <div className={styles.productThumb}>
                <ProductThumbTitle/>
                <ProductThumbImg />
                <ProductThumbSale/>
            </div>
            <div className={styles.productInfo}>
                <ProductText/>
                <AuthorWrap/>
                <PriceContainer/>
                <BuyContainer/>
                <ShortDescription/>
            </div>
        </div>  
  )
}

export default ProductContainer;