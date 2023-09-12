import Nav from '../../templates/Nav';
import TopHeader from '../../templates/TopHeader';
import BottomHeader from '../../templates/BottomHeader';
import Banner from '../../templates/Banner';
import Footer from '../../templates/Footer';
import HomeLeft from '../../templates/HomeLeft';
import HomeRight from '../../templates/HomeRight';
import styles from './style.module.css'
const HomePage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <TopHeader/>
            <BottomHeader/>
            <Nav appear={true}/>
            <Banner/>
            <div className="container">
                <HomeLeft className={styles.homeLeft}/>
                <HomeRight className={styles.homeRight}/>
            </div>
            <div className="clearfix"></div>
            <Footer/>
            {/* <AuthorContent/> */}
        </>
    )
};
  
export default HomePage