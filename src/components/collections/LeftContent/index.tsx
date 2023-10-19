import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/RootStore.store';
import { ICategory } from '../../../APIs/category.api';
import { useEffect } from 'react';

const LeftContent = observer(() => {
    const store = useStore()
    useEffect(()=>{
        store.CategoryStore?.getAllCategorysAPI()
    }, [])
    return (
          <ul className={styles.leftContent}>
              <li className={styles.leftContentTitle}>
                  DANH MỤC
              </li>
              {
                store.CategoryStore?.getAllCategories && store.CategoryStore?.getAllCategories.map((item: ICategory)=>{
                    return(
                        <li key={item._id}>
                            <a href="#">
                                Sách {item.name}
                                <span className={styles.count}> (3)</span>
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