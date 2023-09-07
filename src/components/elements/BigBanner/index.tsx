import styles from './style.module.css';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
function BigBanner() {
  return (
    <div className={styles.bigBanner}>
        <a href="#">
            <img src={pic1} alt="forbes" className={styles.bannerImg1}/>
        </a>
    </div>
    
  )
}

export default BigBanner;