import styles from './style.module.css';
import ProductThumbTitle from '../../elements/ProductThumbTitle';
import ProductThumbImg from '../../elements/ProductThumbImg';
import ProductThumbSale from '../../elements/ProductThumbSale';
import ProductText from '../../elements/ProductText';
import AuthorWrap from '../../elements/AuthorWrap';
import PriceContainer from '../../elements/PriceContainer';
import BuyContainer from '../../elements/BuyContainer';
import ShortDescription from '../../elements/ShortDescription';
import { observer } from 'mobx-react';
import { IBook } from '../../../stores/childrens/Books.store';
const ProductContainer = observer(({book}: {book: IBook}) => {
    const newPrice = book.price - book.price * book.discount / 100;
    return (
          <div className={styles.productContainer}>
              <div className={styles.productThumb}>
                  <ProductThumbTitle/>
                  <ProductThumbImg imgUrl = {book.imageUrl} id={book._id}/>
                  <ProductThumbSale discount={book.discount}/>
              </div>
              <div className={styles.productInfo}>
                  <ProductText title={book.name} id={book._id}/>
                  <AuthorWrap authorName={book.author.name}/>
                  <PriceContainer oldPrice={book.price} newPrice={newPrice}/>
                  <BuyContainer/>
                  <ShortDescription description={book.description} id={book._id}/>
              </div>
          </div>  
    )
  })

export default ProductContainer;