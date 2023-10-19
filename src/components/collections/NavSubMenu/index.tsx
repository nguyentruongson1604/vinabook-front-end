import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import NavSubMenu2 from '../../elements/NavSubMenu2';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/RootStore.store';
import { ICategory } from '../../../APIs/category.api';
import { IAuthorByCategory } from '../../../stores/childrens/Authors.store';
import { IPublisherByCategory } from '../../../stores/childrens/Publishers.store';

const NavSubMenu = observer(() => {
    const [open , setOpen] = useState(false)
    const [itemOpen, setItemOpen] = useState<string>()
    const store = useStore()
    const categories = store.CategoryStore?.getAllCategories
    // console.log(categories)

    return (
      <ul className={styles.navSubMenu}>
          {
            categories && categories.map((item: ICategory) => {
                const authors = store.AuthorStore?.getAuthorsCategory.find((listAuthor: IAuthorByCategory) => {
                    if(listAuthor.categoryId === item._id){
                        // console.log('author book',listAuthor.listAuthor)
                        return listAuthor
                    }
                })

                const publishers = store.PublisherStore?.listPublishersByCategory.find((listPublisher: IPublisherByCategory) => {
                    if(listPublisher.categoryId === item._id){
                        // console.log('publisher book',listPublisher.listPublisher)
                        return listPublisher
                    }
                })

                return(
                    <li key={item._id} onMouseOver={() =>{ setOpen(true); setItemOpen(item._id)}} onMouseLeave={() =>setOpen(true)} className={styles.navSubMenuTitle}>
                        <a href="#">
                            {item.name}
                        </a>
                        <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                        {open && itemOpen === item._id && <NavSubMenu2 listPublisher = {publishers?.listPublisher} listAuthor = {authors?.listAuthor}/>}
                    </li>
                )
            })
          }
      </ul>
    )
  })

export default NavSubMenu;