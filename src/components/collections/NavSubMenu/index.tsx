/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import NavSubMenu2 from '../../elements/NavSubMenu2';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/RootStore.store';
import { useNavigate } from 'react-router';
import { ICategoryAndRelation } from '../../../stores/childrens/Categorys.store';

const NavSubMenu = observer(() => {
    const [open , setOpen] = useState(false)
    const [itemOpen, setItemOpen] = useState<string>()
    const store = useStore()
    const navigate = useNavigate()
    const categories = store.CategoryStore?.getCategoriesAndRelation
    // console.log(categories)

    return (
      <ul className={styles.navSubMenu}>
          {
            categories && categories.map((item: ICategoryAndRelation) => {
                const authors = item.authors;
                const publishers = item.publishers;

                return(
                    <li key={item._id} onMouseOver={() =>{ setOpen(true); setItemOpen(item._id)}} onMouseLeave={() =>setOpen(false)} className={styles.navSubMenuTitle}>
                        <a href="" onClick={()=>{navigate(`/category/${item._id}`)}}>
                            {item.name}
                        </a>
                        <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                        {open && itemOpen === item._id && <NavSubMenu2 listPublisher = {publishers} listAuthor = {authors}/>}
                    </li>
                )
            })
          }
      </ul>
    )
  })

export default NavSubMenu;