import styles from './style.module.css'
import logo from '../../images/vnb_logo_2x.png'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FormWrapper = () => {
    return(
        <form action="get" className={styles.formWrapper}>
            <div className="combo-box">
                <div className={styles.inputGroup}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    <input type="text" name="search" id="search" placeholder='Tìm kiếm tựa sách, tác giả' className='input-content'/>
                    <button type="submit" className={styles.buttonSubmit}>Tìm sách</button>
                </div>
            </div>
        </form>
        
    )
}

export default FormWrapper