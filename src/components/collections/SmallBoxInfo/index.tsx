import clsx from 'clsx';

import styles from './style.module.css'
import BoxPrice from '../../elements/BoxPrice/Index';
const price = {
  className: styles.price
}
const SmallBoxInfo: React.FC<{ book?: object, className?: string}> = ({ book, className}) => {
    return (
        <div className={className}>
          <div className={styles.smallBoxInfo}> 
            <div className={styles.picThump}>
                <a href="#">
                    <img src="https://www.vinabook.com/images/thumbnails/product/50x/281094_cay-chuoi-non-di-giay-xanh-bia-mem.jpg" data-src="https://www.vinabook.com/images/thumbnails/product/50x/281094_cay-chuoi-non-di-giay-xanh-bia-mem.jpg" alt="Cây Chuối Non Đi Giày Xanh (Bìa Mềm)" width="55" height="" title="Cây Chuối Non Đi Giày Xanh (Bìa Mềm)"/>
                </a>
            </div>
            <div className={styles.infoBook}>
                <div className={styles.tittle}>
                    <a href="#">Cách Nuôi Dạy Một Đứa Trẻ Có Trái Tim Ấm Áp Cách Nuôi Dạy Một Đứa Trẻ Có Trái Tim Ấm Áp</a>
                </div>
                <div className={styles.auth}>
                    <p>Nobuyoshi Hirai</p>
                </div>
                <div className={styles.price}>
                    <BoxPrice oldprice={95000} newprice={81000} className={price}/>
                </div>
            </div>
        </div>
      </div>  
    );
  };
export default SmallBoxInfo