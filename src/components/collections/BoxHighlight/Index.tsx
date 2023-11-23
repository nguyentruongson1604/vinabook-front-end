/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';

import AddToCard from '../../elements/AddToCard/Index';
import BoxPrice from '../../elements/BoxPrice/Index';
import BoxSaleOff from '../../elements/BoxSaleOff/Index';
import styles from './Style.module.css'
import { IBook } from '../../../stores/childrens/Books.store';
import { observer } from 'mobx-react';
import { IBookCart, IBookInCart } from '../../../stores/childrens/Carts.store';
import { useStore } from '../../../stores/RootStore.store';
import { Link } from 'react-router-dom';

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
            discount: book?.discount,
            quantity: book?.quantity
        }

        const bookAdd: IBookInCart = {
            bookId: newBook,
            quantity: 1
        }
        console.log('add',bookAdd)
        store.CartStore?.addBookToCart(bookAdd)
    }

    return (
        <div className={className}>
            <div className={styles.background} style={backgr}>
                <div className={styles.imgThump}> 
                    <Link to={`/details/${book?._id}`}>
                        <img className="img" src={book?.imageUrl} data-src={book?.imageUrl} alt={book?.name} width="210" height="" title={book?.name}/>
                    </Link>
                </div>
                <div className={clsx(styles.textInfo, 'clearfix')}> 
                    <div className={styles.tittle}>
                        <div className={styles.smallTittle}>
                            <Link to={`/details/${book?._id}`}>{book?.name}</Link>
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