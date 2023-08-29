import clsx from 'clsx';

import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './Style.module.css'
const saleOff = {
  className: styles.saleOff
}
const price = {
  className: styles.price
}
const BoxInfoBook: React.FC<{ book?: object, className?: string}> = ({ book, className}) => {
    return (
      <div className={className}>
        <div className={styles.boxInfoBook}>
            <div className={styles.picBook}>
                <a href="#">
                    <img className=" pict lazy-img" src="https://www.vinabook.com/images/thumbnails/product/115x/374820_so-tay-bac-si-nhi-hieu-dung-benh-chua-nhe-tenh.jpg" data-src="https://www.vinabook.com/images/thumbnails/product/115x/374820_so-tay-bac-si-nhi-hieu-dung-benh-chua-nhe-tenh.jpg"
                    alt="Sổ tay bác sĩ nhí – Hiểu đúng bệnh, chữa nhẹ tênh" width="115" height="" title="Sổ tay bác sĩ nhí – Hiểu đúng bệnh, chữa nhẹ tênh" />
                </a>
            </div>
            <div className={styles.textInfoBook}>
              <div className={styles.boxTittleBook}>
                <div className={styles.tittleSmallBook}>
                    <a href="" className={styles.productTittle}>Sổ tay bác sĩ nhí – Hiểu đúng bệnh, chữa nhẹ tênh</a>
                </div>
                <span>Štěpánka Sekaninová</span>
              </div>
                <div className={styles.textContentBook}>
                    <a href='#'>
                      Đã bao giờ các bạn nhỏ gặp phải tình huống bạn bè, người thân ho ốm hay bảnfdsahkfjdhsakjfhdsakfdsahkfjdhsakjfhdsakfdsahkfjdhsakjfhdsakfdsahkfjdhsakjfhdsakfdsahkfjdhsakjfhdsakfdsahkfjdhsakjfhdsak
                    </a>
                </div>
            </div>
            <div className='clearfix'></div>
            <div className={clsx(styles.boxInfoPrice)}>
                <BoxSaleOff discount={15} className={saleOff}/>
                <BoxPrice oldprice={180000} newprice={153000} className={price}/>
            </div>
        </div>
      </div>
    );
  };
export default BoxInfoBook