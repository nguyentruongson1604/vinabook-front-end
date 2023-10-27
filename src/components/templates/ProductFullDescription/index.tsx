import ProductFullDetails from '../../elements/ProductFullDetails'
import ProductTab from '../../elements/ProductTab'
import ProductMainInfo from '../../collections/ProductMainInfo'
import RouteLine from '../../collections/RouteLine'
import style from './style.module.css'
import MainboxProduct from '../../collections/MainboxProduct'
import { observer } from 'mobx-react'
import { useStore } from '../../../stores/RootStore.store'

const ProductFullDescription = observer(() => {
    const store = useStore()
    const book = store.BooksStore?.getCurrentBook
    
    return(
        <div className='container'>
            <RouteLine book={book}/>
            <ProductMainInfo book={book}/>
            <ProductTab />
            <MainboxProduct book={book} />
            <ProductFullDetails book={book}/>
        </div>
    )
})

export default ProductFullDescription