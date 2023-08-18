import LeftFooterContent from '../../elements/LeftFooterContent'
import RightFooterContent from '../../elements/RightFooterContent'
import SuggestKeyFooter from '../../elements/SuggestKeyFooter'
import styles from './style.module.css'

const FooterBody = () => {
    return(
        <div className={styles.footerBody}>
            <div className={styles.row}>
                <LeftFooterContent />
                <RightFooterContent />
            </div>
            <div className={styles.row}>
                <SuggestKeyFooter />
            </div>
        </div>
    )
}

export default FooterBody