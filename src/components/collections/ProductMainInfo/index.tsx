import ProductImage from '../../elements/ProductImage'
import ProductInfo from '../../elements/ProductInfo'
import ProductPropRight from '../../elements/ProductProps'
import style from './style.module.css'
import { observer } from 'mobx-react'
import { IBook } from '../../../stores/childrens/Books.store'

const ProductMainInfo = observer(({book} : {book: IBook | undefined}) => {
    return(
        <div className={style.productMainInfo}>
            {
                book &&
                <div>
                    <div className={style.productImage}>
                        <ProductImage src={book!.imageUrl}/>
                    </div>
                    <div className={style.productInfo}>
                        <ProductInfo title={book!.name} author={book!.author.name} company={book!.publisher.name} publicCompany={book!.publisher.name} intro={book!.description}/>
                    </div>
                    <div className={style.ProductPropRight}>
                        <ProductPropRight price={book!.price} discount={book!.discount} quantity={book!.quantity}/>
                    </div>
                </div>
            }
        </div>
    )
})

export default ProductMainInfo