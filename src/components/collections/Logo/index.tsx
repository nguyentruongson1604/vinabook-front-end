import styles from './style.module.css'
import logo from '../../images/vnb_logo_2x.png'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Logo = () => {
    return(
        <div className={styles.bottomHeader}>       
            <div className={styles.logo}>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
            </div>    
        </div>
        
    )
}

export default Logo