
import styles from './style.module.css';
import BigBanner from '../../elements/BigBanner';
import SmallBanner from '../../elements/SmallBanner';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
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