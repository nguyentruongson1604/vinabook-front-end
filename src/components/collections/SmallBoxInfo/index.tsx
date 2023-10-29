/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './style.module.css'
import BoxPrice from '../../elements/BoxPrice/Index';
import { IBook } from '../../../stores/childrens/Books.store';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
const price = {
  className: styles.price
}
const SmallBoxInfo: React.FC<{ book?: IBook, className?: string}> = observer(({ book, className}) => {
  return (
    <div className={className}>
      <div className={styles.smallBoxInfo}> 
        <div className={styles.picThump}>
            <Link to={`/details/${book?._id}`}>
                <img src={book?.imageUrl} data-src={book?.imageUrl} alt={book?.imageUrl} width="55" height="" title={book?.name}/>
            </Link>
        </div>
        <div className={styles.infoBook}>
            <div className={styles.tittle}>
                <Link to={`/details/${book?._id}`}>{book?.name}</Link>
            </div>
            <div className={styles.auth}>
                <p>{book?.author.name}</p>
            </div>
            <div className={styles.price}>
                <BoxPrice oldprice={book?.price} newprice={book?.price! * (100 - book?.discount!) / 100} className={price}/>
            </div>
        </div>
    </div>
  </div>  
);
})
export default SmallBoxInfo