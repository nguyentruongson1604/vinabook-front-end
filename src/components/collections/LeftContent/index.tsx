/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/RootStore.store';
import { useNavigate } from 'react-router';
import { ICategoryAndRelation } from '../../../stores/childrens/Categorys.store';

const LeftContent = observer(() => {
    const store = useStore()
    const navigate = useNavigate()
    const listBookCategory = store.CategoryStore?.getCategoriesAndRelation

    return (
          <ul className={styles.leftContent}>
              <li className={styles.leftContentTitle}>
                  DANH MỤC
              </li>
              {
                listBookCategory && listBookCategory.map((item: ICategoryAndRelation) => {
                    return(
                        <li key={item._id}>
                             <a href="" onClick={()=>{navigate(`/category/${item._id}`)}}>
                                 Sách {item.name}
                                 <span className={styles.count}> ({item.books})</span>
                                 <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                             </a>
                        </li>
                    )
                })
              }
          </ul>
    )
  })

export default LeftContent;