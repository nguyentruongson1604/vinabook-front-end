import Nav from '../../templates/Nav';
import Banner from '../../templates/Banner';
import HomeLeft from '../../templates/HomeLeft';
import HomeRight from '../../templates/HomeRight';
import styles from './style.module.css'
import { observer } from 'mobx-react';

const HomePage: React.FC<{className?: string }> = observer(({className }) => {
    return (
        <>
            <Nav appear={true}/>
            <Banner/>
            <div className="container">
                <HomeLeft className={styles.homeLeft}/>
                <HomeRight className={styles.homeRight}/>
            </div>
            <div className="clearfix"></div>
        </>
    )
});
  
export default HomePage