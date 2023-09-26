import BottomHeader from '../../templates/BottomHeader'
import Footer from '../../templates/Footer'
import Nav from '../../templates/Nav'
import ProductFullDescription from '../../templates/ProductFullDescription'
import TopHeader from '../../templates/TopHeader'
import style from './style.module.css'

const DetailsPage = () => {
    return(
        <div>
            <TopHeader />
            <BottomHeader />
            <Nav/>
            <div className="clearfix"></div>
            <div className="container">
                <ProductFullDescription />
            </div>
            <div className="clearfix"></div>
            <Footer />
        </div>
    )
}

export default DetailsPage