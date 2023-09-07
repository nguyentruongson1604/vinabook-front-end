import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const LeftContent =() => {
  return (
        <ul className={styles.leftContent}>
            <li className={styles.fontBold}>
                <a href="#">
                    Kho sách giảm giá
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li className={styles.fontBold}>
                <a href="#">
                    Kho sách bán chạy
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li className={styles.fontBold}>
                <a href="#">
                    Sách mới phát hành
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li className={styles.fontBold}>
                <a href="#">
                    Sách sắp phát hành
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li className={styles.fontBold}>
                <a href="#">
                    Combo ưu đãi
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li className={styles.leftContentTitle}>
                DANH MỤC
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li>
            <li>
                <a href="#">
                    Sách ngoại văn
                    <span className={styles.count}> (3)</span>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                </a>
            </li> 
        </ul>
  )
}

export default LeftContent;