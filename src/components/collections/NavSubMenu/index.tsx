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
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>
        <li onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
            <a href="#">
                Sách Trong Nước
                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
            </a>
            {open && <NavSubMenu2 />}
        </li>

    </ul>
    </>

  )
}

export default NavSubMenu;