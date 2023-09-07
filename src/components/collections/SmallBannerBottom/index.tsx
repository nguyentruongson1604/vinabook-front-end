import styles from './style.module.css';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';
import pic6 from '../../images/pic6.jpg';
function SmallBannerBottom() {
  return (
    <div className={styles.smallBannerBottom}>
        <div className="container">
            <div className={styles.styleLeft}></div>
            <div className={styles.styleRight}>
                <div className={styles.bannerBottom1}>
                    <a href="#">
                        <img src={pic4} alt="tdcs" className={styles.bannerImgB}/>
                    </a>
                </div>
                <div className={styles.bannerBottom1}>
                    <a href="#">
                        <img src={pic5} alt="qgkn" className={styles.bannerImgB}/>
                    </a>
                </div>
                <div className={styles.bannerBottom1}>
                    <a href="#">
                        <img src={pic6} alt="sknb" className={styles.bannerImgB}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SmallBannerBottom;