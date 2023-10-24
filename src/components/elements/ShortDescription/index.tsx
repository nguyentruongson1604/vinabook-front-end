/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router';
const ShortDescription = observer(({id, description}: {id: string, description: string}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.shortDescription}>
            <div className={styles.shortTitle}>
                {description}
            </div>
            <div className={styles.shortMore}>
                <a href="" onClick={()=>{navigate(`/details/${id}`)}}>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                    Xem thêm
                </a>
            </div>
        </div>
    )
  })

export default ShortDescription;