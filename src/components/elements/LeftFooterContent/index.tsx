import styles from './style.module.css'
import appleLogo from '../../images/icon-appstore.png'
import chPlayLogo from '../../images/icon-googleplay.png'
const LeftFooterContent = () => {
    return(
        <div className={styles.leftContentFooter}>
            <div className={styles.colLeftInfo}>
                <div className={styles.content}>
                    <span className={styles.title}>
                    Về Công Ty
                    </span>
                    <ul>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.colLeftInfo}>
                <div className={styles.content}>
                    <span className={styles.title}>
                    Trợ giúp
                    </span>
                    <ul>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.colLeftInfo}>
                <div className={styles.content}>
                    <span className={styles.title}>
                    Tin tức sách
                    </span>
                    <ul>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Giới thiệu công ty</a></li>
                    </ul>
                </div>
            </div>
            
            <div className={styles.colLeftApp}>
                <div className={styles.content}>
                    <span className={styles.title}>Tải ứng dụng trên điện thoại</span>
                </div>
                <figure className={styles.logoApp}>
                    <span><a href=""><img src={appleLogo} alt="" /></a></span>
                    <span><a href=""><img src={chPlayLogo} alt="" /></a></span>
                </figure>
            </div>
        </div>
    )
}

export default LeftFooterContent