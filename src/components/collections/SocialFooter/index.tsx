import InputTextFooter from '../../elements/InputTextFooter'
import LabelSocial from '../../elements/LabelSocial'
import SelectBox from '../../elements/SelectBox'
import SocialButton from '../../elements/SocialButton'
import styles from './style.module.css'

const SocialFooter = () => {
    return(
        <div>
            <form method='post' action="#" className={styles.formWrapper}>
                <div className={styles.newsLetter}>
                    <LabelSocial />
                    <div className={styles.inputGroup}>
                        <InputTextFooter width={180} title='Tên của bạn'/>
                        <InputTextFooter width={180} title='Nhập email của bạn'/>
                        <SelectBox />
                        <SocialButton />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SocialFooter