import clsx from 'clsx';

import AddToCard from '../../elements/AddToCard/Index';
import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './Style.module.css'
const BoxHighlight: React.FC<{ book?: object, background_color?: string, className?: string}> = ({ book,background_color, className}) => {
    const backgr = { "--box-highlight-background-color": background_color } as React.CSSProperties;
    const price ={
        className: styles.price,
        oldPriceEdit: styles.oldPriceEdit,
        newPriceEdit: styles.newPriceEdit
    }
    const sale = {
        className: styles.sale,
        boxSaleOffEdit: styles.boxSaleOffEdit
    } 
    return (
        <div className={className}>
            <div className={styles.background} style={backgr}>
                <div className={styles.imgThump}> 
                    <a href="#">
                        <img className="img" src="https://www.vinabook.com/images/thumbnails/product/210x/374705_bach-khoa-toan-thu-content-dai-bieu-mau.jpg" data-src="https://www.vinabook.com/images/thumbnails/product/210x/374705_bach-khoa-toan-thu-content-dai-bieu-mau.jpg" alt="Bách Khoa Toàn Thư Content: Đại Biểu Mẫu" width="210" height="" title="Bách Khoa Toàn Thư Content: Đại Biểu Mẫu"/>
                    </a>
                </div>
                <div className={clsx(styles.textInfo, 'clearfix')}> 
                    <div className={styles.tittle}>
                        <div className={styles.smallTittle}>
                            <a href="">Bách Khoa Toàn Thư Content: Đại Biểu Mẫu</a>
                        </div>
                        <div className={styles.auth}>Nhiều tác giả</div>
                    </div>
                    <div className={styles.textContent}>
                        <p>Bạn thân mến, Bạn đang sống trong một thời đại mà khi khép mắt vào, điều còn đọng lại trong đầu bạn có khi không phải là những lời thì thầm chúc ngủ ngon, mà là lời lẽ mời gọi từ một chiếc email bạn nhận được lúc nửa đêm. Và khi mở mắt ra, điều đầu tiên bạn nhìn thấy có thể không phải là một gương mặt của người thân quen, hay của chính mình trong gương. Đó có thể là những dòng tin trên chiếc điện thoại của bạn, một hình ảnh trên mạng xã hội, một vài video quảng cáo, một clip Tiktok vui nhộn… Vâng, đúng thế. Chào ngày mới, điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  điều còn đọng  chúng ta đang sống</p>
                    </div>
                    <div className={styles.boxPriceBuy}>
                        <BoxSaleOff discount={10} className={sale}/>
                        <BoxPrice newprice={100000} oldprice={200000} className={price}/>
                        <AddToCard className={styles.addToCard}/>         
                    </div>
                </div>
                
            </div>
        </div>
    );
  };
  
export default BoxHighlight