import CopyrightFooter from '../../collections/CopyrightFooter'
import FooterBody from '../../collections/FooterBody'
import SocialFooter from '../../collections/SocialFooter'
import styles from './style.module.css'

const Footer = () => {
    return(
        <div>
            <div className={styles.socialFooter}>
                <div className="container">
                    <SocialFooter />
                </div>
            </div>
            <div className={styles.footerBody}>
                <div className="container">
                    <FooterBody />
                </div>
            </div>
            <div className={styles.copyRight}>
                <div className="container">
                    <CopyrightFooter />
                </div>
            </div>
        </div>
    )
}

export default Footer