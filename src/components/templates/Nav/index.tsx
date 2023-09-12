
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faComment } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import NavSubMenu from '../../collections/NavSubMenu';
import HeaderContact from '../../elements/HeaderContact';
import { useState } from 'react';

const Nav: React.FC<{ appear?: boolean}> = ({ appear}) =>{
  const [open , setOpen] = useState(true)
  return (
    <div className={styles.nav}>
        
        <div className="container">
            <ul className={styles.navMenu}>
                <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)}>
                    <a href="#">
                        <FontAwesomeIcon icon={faBars} className={styles.iconMenu}/>
                        Danh Mục Sách
                        <FontAwesomeIcon icon={faAngleDown} className={styles.iconAngleDown}/>
                    </a>
                   {appear ? <NavSubMenu/>:(<>{open && <NavSubMenu/>}</>)}

                    
                </li>
                
            </ul>
            <HeaderContact/>
        </div>
    </div>
    
  )
}

export default Nav;