import styles from './style.module.css';
import AuthorMore from '../../elements/AuthorMore';
import LeftContent from '../../collections/LeftContent';
import DetailTittle from '../../elements/DetailTittle';
import SortContainer from '../../elements/SortContainer';
import ProductContainer from '../../collections/ProductContainer';
import RouteLine from '../../collections/RouteLine';
import CategoryRight from '../../templates/CategoryRight';
import TopHeader from '../../templates/TopHeader';
import BottomHeader from '../../templates/BottomHeader';
import Nav from '../../templates/Nav';
import Footer from '../../templates/Footer';
const CategoryPage =() => {
  return (
        <div >
            <TopHeader/>
            <BottomHeader/>
            <Nav appear={false}/>

            <div className="container">
                <RouteLine className={styles.rouLine}/>
                <div className="clearfix"></div>
                <div className={styles.authorContent}>
                    <div className={styles.styleLeft}>
                        <LeftContent/>
                    </div>
                    <div className={styles.styleRight}>
                        <CategoryRight/>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <Footer/>
        </div>   
  )
}

export default CategoryPage;