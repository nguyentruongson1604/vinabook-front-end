import styles from './style.module.css'
import logo from '../../images/vnb_logo_2x.png'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const LogoCart = () => {
    return(
        <div className={styles.logoCard}>
            <a href="#">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#11b02c",}} className={styles.icon}/>  
                <span className={styles.numItemsMiniCart}>2</span>
            </a>
        </div>
        
    )
}

export default LogoCart