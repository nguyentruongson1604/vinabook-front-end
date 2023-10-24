import styles from './style.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeCart from '../../collections/HomeCart'
import { useEffect, useRef, useState } from 'react'
const LogoCart = () => {
    const [isOpenCart, setOpenCart] = useState<boolean>(false);
    const cartRef = useRef<HTMLDivElement>(null);
    const closeCart = (isOpenCart: boolean) => {
        setOpenCart(false)
    }

    useEffect(()=>{
        // console.log('run herer')
        function handleClickOutside(event: MouseEvent){
            if (cartRef.current) {
                const target = event.target as Node;
                if (target && !cartRef.current.contains(target)) {
                    setOpenCart(false);
                }
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    },[cartRef])

    return(
        <div className={styles.logoCard} ref={cartRef}>
            <a >
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#0a6f3c",}} className={styles.icon} onClick={()=>{setOpenCart(!isOpenCart)}}/>
                <span className={styles.numItemsMiniCart}>2</span>
            </a>
            {isOpenCart && <div className={styles.popUpBox}>
                <HomeCart closeCart = {closeCart} />
            </div> }
        </div>
        
    )
}

export default LogoCart