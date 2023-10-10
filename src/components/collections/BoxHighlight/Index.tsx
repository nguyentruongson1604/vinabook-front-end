import clsx from 'clsx';

import AddToCard from '../../elements/AddToCard/Index';
import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './Style.module.css'
import { IBook } from '../../../stores/childrens/Books.store';
import { observer } from 'mobx-react';
const BoxHighlight: React.FC<{ book?: IBook, background_color?: string, className?: string}> = observer(({book, background_color, className}) => {
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
    let newPrice = 0
    if(book?.price && book.discount){
        newPrice = book?.price * (100 - book?.discount) / 100
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
                            <a href="">{book?.name}</a>
                        </div>
                        <div className={styles.auth}>{book?.author.name}</div>
                    </div>
                    <div className={styles.textContent}>
                        <p>{book?.description}</p>
                    </div>
                    <div className={styles.boxPriceBuy}>
                        <BoxSaleOff discount={book?.discount} className={sale}/>
                        <BoxPrice newprice={newPrice} oldprice={book?.price} className={price}/>
                        <AddToCard className={styles.addToCard}/>         
                    </div>
                </div>
                
            </div>
        </div>
    );
  });
  
export default BoxHighlight