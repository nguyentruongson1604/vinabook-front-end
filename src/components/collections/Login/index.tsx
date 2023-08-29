import styles from './style.module.css'
import logo from '../../images/vnb_logo_2x.png'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Login = () => {
    return(
        <div className={styles.login}>
            <a href="#">Đăng nhập</a>   
            <p>|</p>    
            <a href="#">Đăng kí</a>   
        </div>
        
    )
}

export default Login