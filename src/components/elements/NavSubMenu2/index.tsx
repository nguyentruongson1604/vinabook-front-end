import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const NavSubMenu2 = () => {
const [open , setOpen] = useState(false)
  return (
    <div className={styles.navSubMenu2}
        style={{background:'url(https://www.vinabook.com/images/menu/175/van_hoc_nuoc_ngoai___crop.png) right bottom no-repeat white',}}
        onMouseOver={() =>setOpen(true)} onMouseLeave={() =>setOpen(false)}>
        <ul className={styles.navSubMenu2More}>
            <li className={styles.navSubMenu2MoreTitle}>
                DANH MỤC
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
        </ul>
        <ul className={styles.navSubMenu2More}>
            <li className={styles.navSubMenu2MoreTitle}>
                DANH MỤC
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
        </ul>
        <ul className={styles.navSubMenu2More}>
            <li className={styles.navSubMenu2MoreTitle}>
                DANH MỤC
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
            <li>
                <a href="">
                    Đầm màu sắc
                </a>
            </li>
        </ul>
        {open}
    </div>
  )
}

export default NavSubMenu2;