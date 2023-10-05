import styles from './style.module.css'
import logo from '../../images/vnb_logo_2x.png'
import { Link } from 'react-router-dom'
const Logo = () => {
    return(
        <div className={styles.logo}>
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
        </div> 
    )
}

export default Logo