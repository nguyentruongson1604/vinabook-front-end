/* eslint-disable jsx-a11y/anchor-is-valid */

import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import NavSubMenu from '../../collections/NavSubMenu';
import HeaderContact from '../../elements/HeaderContact';
import { useState } from 'react';
import { observer } from 'mobx-react';
import BottomNavigation from '../../elements/BottomNavigation';

const Nav: React.FC<{ appear?: boolean}> = observer(({appear}) =>{
    const [open , setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
      <>
      <div className={styles.nav + " " + styles.none}>
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
      {openMenu &&
        <div className={styles.nav + " " + styles.none2}>
        <div className="container">
            <ul className={styles.navMenu}>
                <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navBar}>
                    <a href="#">
                        <FontAwesomeIcon icon={faBars} className={styles.iconMenu}/>
                        Danh Mục Sách
                        <FontAwesomeIcon icon={faAngleDown} className={styles.iconAngleDown}/>
                    </a>
                   {appear ? <NavSubMenu/>:(<>{open && <NavSubMenu/>}</>)}
                </li>
            </ul>
        </div>
    </div>
      }
      
      <div className="clearfix"></div>
      <BottomNavigation handleOpenMenu={handleOpenMenu}/>
      </>
    )
  })

export default Nav;