import { observer } from 'mobx-react';
import styles from './style.module.css';
import { useState } from 'react';

import { IPublisher } from '../../../APIs/publisher.api';
import { useNavigate } from 'react-router';
import { IAuthor } from '../../../APIs/author.api';

const NavSubMenu2 = observer(({listPublisher, listAuthor} : {listPublisher: IPublisher[] | undefined, listAuthor: IAuthor[] | undefined}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.navSubMenu2}>
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
                    TÁC GIẢ
                </li>
                {
                    listAuthor && listAuthor.map((item: IAuthor)=>{
                        return(
                            <li key={item._id}>
                                 <a href={item._id} onClick={()=>{navigate(`/author/${item._id}`)}}>
                                     {item.name}
                                 </a>
                             </li>
                        )
                    })
                }
            </ul>
            <ul className={styles.navSubMenu2More}>
                <li className={styles.navSubMenu2MoreTitle}>
                    NHÀ XUẤT BẢN
                </li>
                {
                    listPublisher && listPublisher.map((item: IPublisher)=>{
                        return(
                            <li key={item._id}>
                                 <a href={item._id} onClick={()=>{navigate(`/publisher/${item._id}`)}}>
                                     {item.name}
                                 </a>
                             </li>
                        )
                    })
                }
            </ul>
        </div>
    )
})

export default NavSubMenu2;