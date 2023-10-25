import clsx from 'clsx';
import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './Style.module.css'
import { IBook } from '../../../stores/childrens/Books.store';
import { useNavigate } from 'react-router';
const saleOff = {
  className: styles.saleOff
}
const price = {
  className: styles.price
}
const BoxInfoBook: React.FC<{ book?: IBook, className?: string}> = ({ book, className}) => {
    const navigate = useNavigate()
    return (
      <div className={className}>
        <div className={styles.boxInfoBook} onClick={()=>{navigate(`/details/${book?._id}`)}}>
            <div className={styles.picBook}>
                <a href="" >
                    <img className=" pict lazy-img" src={book?.imageUrl}
                    alt={book?.name} width="115" height="" title={book?.name} />
                </a>
            </div>
            <div className={styles.textInfoBook}>
              <div className={styles.boxTittleBook}>
                <div className={styles.tittleSmallBook}>
                    <a href="" className={styles.productTittle}>{book?.name}</a>
                </div>
                <span>{book?.author.name}</span>
              </div>
                <div className={styles.textContentBook}>
                    <a href='#'>
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