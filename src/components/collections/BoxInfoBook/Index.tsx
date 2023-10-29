/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './Style.module.css'
import { IBook } from '../../../stores/childrens/Books.store';
import { Link } from 'react-router-dom';
const saleOff = {
  className: styles.saleOff
}
const price = {
  className: styles.price
}
const BoxInfoBook: React.FC<{ book?: IBook, className?: string}> = ({ book, className}) => {
    return (
      <div className={className}>
        <div className={styles.boxInfoBook}>
            <div className={styles.picBook}>
                <Link to={`/details/${book?._id}`}>
                    <img className=" pict lazy-img" src={book?.imageUrl}
                    alt={book?.name} width="115" height="" title={book?.name} />
                </Link>
            </div>
            <div className={styles.textInfoBook}>
              <div className={styles.boxTittleBook}>
                <div className={styles.tittleSmallBook}>
                    <Link to={`/details/${book?._id}`} className={styles.productTittle}>{book?.name}</Link>
                </div>
                <span>{book?.author.name}</span>
              </div>
                <div className={styles.textContentBook}>
                    <a>
                      {book?.description}
                    </a>
                </div>
            </div>
            <div className='clearfix'></div>
            <div className={clsx(styles.boxInfoPrice)}>
                <BoxSaleOff discount={book?.discount} className={saleOff}/>
                <BoxPrice oldprice={book?.price} newprice={book?.price! * (100 - book?.discount!) / 100} className={price}/>
            </div>
        </div>
      </div>
    );
  };
export default BoxInfoBook