import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BreadCrumbs =() => {
    return (
            <div className={styles.authorContent}>
                <div className="container">
                    <ul className={styles.breadCrumbs}>
                        <li>
                            <a href="">
                                Trang chủ
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                                Nguyên Phong
                            </a>
                        </li>
                    </ul>
                </div>
            </div>   
    )
}

export default BreadCrumbs;