import styles from './style.module.css'
import logo from '../../images/vnb_logo_2x.png'
import Logo from '../../collections/Logo'
import FormWrapper from '../../collections/FormWrapper'
import LogoCard from '../../collections/LogoCard'
import Login from '../../collections/Login'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BottomHeader = () => {
    return(
        <div className={styles.bottomHeader}>
            <div className="container">
                <Logo/>
                <FormWrapper/>
                <LogoCard/>
                <Login/>
            </div>
            
        </div>
        
    )
}

export default BottomHeader