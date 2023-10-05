import Nav from '../../templates/Nav'
import ProductFullDescription from '../../templates/ProductFullDescription'
import style from './style.module.css'

const DetailsPage = () => {
    return(
        <div>
            <Nav/>
            <div className="clearfix"></div>
            <div className="container">
                <ProductFullDescription />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default DetailsPage