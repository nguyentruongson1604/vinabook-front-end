import styles from './style.module.css'
import logoHotDeal from '../../images/logo_hotdeal_2x.png'
import logoYesGo from '../../images/logo_yesgo_2x.png'

const RelateWebsite = () => {
    return(
        <div className={styles.relateWebsite}>
            <p>Website cùng hệ thống</p>
            <figure className={styles.logoWeb}>
                <a href="#">
                    <img src={logoHotDeal} alt="logo-hot-deal" />
                </a>
            </figure>
            <figure className={styles.logoWeb}>
                <a href="#">
                    <img src={logoYesGo} alt="logo-yes-go" />
                </a>
            </figure>
        </div>
    )
}

export default RelateWebsite