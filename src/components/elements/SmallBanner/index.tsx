import styles from './style.module.css';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
function SmallBanner() {
  return (
     <div className={styles.smallBanner}>
        <div className={styles.bannerTop}>
            <a href="#">
                <img src={pic2} alt="1111" className={styles.bannerImgT}/>
            </a>
        </div>
        <div className={styles.bannerBottom}>
            <a href="#">
                <img src={pic3} alt="ehon" className={styles.bannerImgT}/>
            </a>
        </div>
    </div>
    
  )
}

export default SmallBanner;