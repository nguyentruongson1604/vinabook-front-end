import BoxInfoBook from '../../collections/BoxInfoBook/Index';
import MainBoxTittle from '../../elements/MainBoxTittle/Index';
import Footer from '../../templates/Footer';
import HomeLeft from '../../templates/HomeLeft';
import HomeRight from '../../templates/HomeRight';
import styles from './style.module.css'
const HomePage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <div className="container">
                <HomeLeft className={styles.homeLeft}/>
                <HomeRight className={styles.homeRight}/>
            </div>
            <div className="clearfix"></div>

            <Footer/>
        </>
    )
};
  
export default HomePage