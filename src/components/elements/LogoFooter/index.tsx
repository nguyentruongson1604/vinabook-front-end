import styles from './style.module.css'
import logoFooter from '../../images/logo_so_cong_thuong.png'

const LogoFooter = () => {
    return(
        <div className={styles.logoFooter}>
            <a href='#'>
                <img src={logoFooter} alt="bo-cong-thuong" width={222} height={83} />
            </a>
        </div>
    )
}

export default LogoFooter