/* eslint-disable jsx-a11y/anchor-is-valid */
import { observer } from 'mobx-react';
import { IBook } from '../../../stores/childrens/Books.store';
import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './style.module.css'
import { useNavigate } from 'react-router';
const saleOff = {
  className: styles.saleOff
}
const price = {
  oldPriceEdit: styles.oldPriceEdit,
  newPriceEdit: styles.newPriceEdit
}
const CategoryInfoBook: React.FC<{ book?: IBook, className?: string}> = observer(({ book, className}) => {
  const newPrice = book?.price! - book?.price! * book?.discount! / 100;
  const navigate = useNavigate()
  return (
    <div className={className}>
      <div className={styles.CategoryInfoBook}>
          <div className={styles.productThump}> 
              <a href="" onClick={()=>{navigate(`/details/${book?._id}`)}}>
                  <img className={styles.img} src={book?.imageUrl} data-src={book?.imageUrl} alt={book?.name} width="115" height="" title={book?.name} />
                  <BoxSaleOff discount={book?.discount} className={saleOff}/>
              </a>
          </div>
          <div className={styles.infoBook}>
              <div className={styles.bookName}>
                  <a href="" onClick={()=>{navigate(`/details/${book?._id}`)}}>{book?.name}</a>
              </div>
              <div className={styles.bookAuth}>
                  <p>{book?.author.name}</p>
              </div>
          </div>
          <BoxPrice oldprice={book?.price} newprice={newPrice} className={price}/>
      </div>
    </div>
  );
});
export default CategoryInfoBook