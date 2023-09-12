import styles from './style.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeCart from '../../collections/HomeCart'
import { useState } from 'react'
const LogoCart = () => {
    const [isOpenCart, setOpenCart] = useState<boolean>(false);

    return(
        <div className={styles.logoCard}>
            <a >
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#0a6f3c",}} className={styles.icon} onClick={()=>{setOpenCart(!isOpenCart)}}/>
                <span className={styles.numItemsMiniCart}>2</span>
            </a>
            {isOpenCart && <div className={styles.popUpBox}>
                <HomeCart />
            </div> }
        </div>
        
    )
}

export default LogoCart