import ProductFullDetails from '../../elements/ProductFullDetails'
import ProductTab from '../../elements/ProductTab'
import ProductMainInfo from '../../collections/ProductMainInfo'
import RouteLine from '../../collections/RouteLine'
import style from './style.module.css'
import MainboxProduct from '../../collections/MainboxProduct'

const ProductFullDescription = () => {
    return(
        <div className='container'>
            <RouteLine/>
            <ProductMainInfo/>
            <ProductTab />
            <MainboxProduct />
            <ProductFullDetails/>
        </div>
    )
}

export default ProductFullDescription