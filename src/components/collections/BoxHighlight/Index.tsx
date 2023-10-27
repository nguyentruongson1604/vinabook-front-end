/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';

import AddToCard from '../../elements/AddToCard/Index';
import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './Style.module.css'
import { IBook } from '../../../stores/childrens/Books.store';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router';
import { IBookCart, IBookInCart } from '../../../stores/childrens/Carts.store';
import { useStore } from '../../../stores/RootStore.store';

const BoxHighlight: React.FC<{ book?: IBook, background_color?: string, className?: string}> = observer(({book, background_color, className}) => {
    const store = useStore()
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
    const addBookToCart = async () =>{
        const newBook: IBookCart = {
            _id: book?._id!,
            name: book?.name!,
            imageUrl: book?.imageUrl!,
            price: book?.price,
            discount: book?.discount
        }

        const bookAdd: IBookInCart = {
            bookId: newBook,
            quantity: 1
        }

        store.CartStore?.addBookToCart(bookAdd)
    }
    const navigate = useNavigate()
    return (
        <div className={className}>
            <div className={styles.background} style={backgr}>
                <div className={styles.imgThump}> 
                    <a href="" onClick={()=>{navigate(`/details/${book?._id}`)}}>
                        <img className="img" src={book?.imageUrl} data-src={book?.imageUrl} alt={book?.name} width="210" height="" title={book?.name}/>
                    </a>
                </div>
                <div className={clsx(styles.textInfo, 'clearfix')}> 
                    <div className={styles.tittle}>
                        <div className={styles.smallTittle}>
                            <a href="" onClick={()=>{navigate(`/details/${book?._id}`)}}>{book?.name}</a>
                        </div>
                        <div className={styles.auth}>{book?.author.name}</div>
                    </div>
                    <div className={styles.textContent}>
                        <p>{book?.description}</p>
                    </div>
                    <div className={styles.boxPriceBuy}>
                        <BoxSaleOff discount={book?.discount} className={sale}/>
                        <BoxPrice newprice={newPrice} oldprice={book?.price} className={price}/>
                        <AddToCard className={styles.addToCard} handleAddBook={addBookToCart}/>         
                    </div>
                </div>
            </div>
        </div>
    );
  });
  
export default BoxHighlight