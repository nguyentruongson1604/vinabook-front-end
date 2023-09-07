import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SortContainer =() => {
  return (
        <ul className={styles.sortContainer}>
            <li>
                <a href="#">
                    Sắp xếp theo trạng thái sách
                    <FontAwesomeIcon icon={faAngleDown} className={styles.iconAngleDown}/>
                </a>
                <ul className={styles.dropdownContainer}>
                    <li>
                        <a href="#">Mới nhất</a>
                    </li>
                    <li>
                        <a href="">A đến Z</a>
                    </li>
                    <li>
                        <a href="#">Z đến A</a>
                    </li>
                    <li>
                        <a href="#">Giá thấp đến cao</a>
                    </li>
                    <li>
                        <a href="#">Giá cao đến thấp</a>
                    </li>
                    <li>
                        <a href="#">Giảm giá thấp đến cao</a>
                    </li>
                    <li>
                        <a href="#">Giảm giá cao đến thấp</a>
                    </li>
                </ul>
            </li>
        </ul> 
  )
}

export default SortContainer;