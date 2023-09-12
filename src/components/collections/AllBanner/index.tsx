
import styles from './style.module.css';
import BigBanner from '../../elements/BigBanner';
import SmallBanner from '../../elements/SmallBanner';

function AllBanner() {
  return (
    <div className={styles.allBanner}>
        <div className="container">
            <div className={styles.styleLeft}></div>
            <div className={styles.styleRight}>
                <BigBanner/>
                <SmallBanner/>
            </div>
        </div>
    </div>
    
  )
}

export default AllBanner;