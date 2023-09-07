import clsx from 'clsx';

import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './style.module.css'
const saleOff = {
  className: styles.saleOff
}
const price = {
  oldPriceEdit: styles.oldPriceEdit,
  newPriceEdit: styles.newPriceEdit
}
const CategoryInfoBook: React.FC<{ book?: object, className?: string}> = ({ book, className}) => {
    return (
      <div className={className}>
        <div className={styles.CategoryInfoBook}>
            <div className={styles.productThump}> 
                <a href="#">
                    <img className={styles.img} src="https://www.vinabook.com/images/thumbnails/product/115x/375914_phan-tich-chung-khoan-security-analysis.jpg" data-src="https://www.vinabook.com/images/thumbnails/product/115x/375914_phan-tich-chung-khoan-security-analysis.jpg" alt="Phân Tích Chứng Khoán (Security Analysis)" width="115" height="" title="Phân Tích Chứng Khoán (Security Analysis)" />
                    <BoxSaleOff discount={15} className={saleOff}/>
                </a>
            </div>
            <div className={styles.infoBook}>
                <div className={styles.bookName}>
                    <a href="#">Phân Tích Chứng Khoán (Security Analysis)</a>
                </div>
                <div className={styles.bookAuth}>
                    <p>Benjamin Graham - David L Dodd</p>
                </div>
            </div>
            <BoxPrice oldprice={200000} newprice={150000} className={price}/>
        </div>
      </div>
    );
  };
export default CategoryInfoBook