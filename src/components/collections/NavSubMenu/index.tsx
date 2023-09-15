import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import NavSubMenu2 from '../../elements/NavSubMenu2';
import { useState } from 'react';

const NavSubMenu = () => {
  const [open , setOpen] = useState(false)
  return (
    <>
    <ul className={styles.navSubMenu}>
        <li className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Bán Chạy
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Nước Ngoai
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
            </a>
            <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            {open && <NavSubMenu2 />}
        </li>

    </ul>
    </>

  )
}

export default NavSubMenu;