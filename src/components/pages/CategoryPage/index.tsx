import styles from './style.module.css';
import LeftContent from '../../collections/LeftContent';
import RouteLine from '../../collections/RouteLine';
import CategoryRight from '../../templates/CategoryRight';
import Nav from '../../templates/Nav';

const CategoryPage =() => {
  return (
        <div >
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
        </div>   
  )
}

export default CategoryPage;