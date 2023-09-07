import styles from './style.module.css';
import pic7 from '../../images/pic7.jpg';
import pic8 from '../../images/pic8.jpg';
import pic9 from '../../images/pic9.jpg';
import pic10 from '../../images/pic10.jpg';
function AuthorBook() {
  return (
    <div className={styles.authorBook}> 
        <div className={styles.authorProduct}>
            <div className={styles.productImg}>
                <a href="#">
                    <img src={pic8} alt="pic8"/>
                </a>
            </div>
            <div className={styles.productTitle}>
                <a href="#">
                    Muôn kiếp nhân sinh
                </a>
            </div>
        </div>
        <div className={styles.authorProduct}>
            <div className={styles.productImg}>
                <a href="#">
                    <img src={pic9} alt="pic9"/>
                </a>
            </div>
            <div className={styles.productTitle}>
                <a href="#">
                    Huyền thuật và các đạo sĩ Tây Tạng
                </a>
            </div>
        </div>
        <div className={styles.authorProduct}>
            <div className={styles.productImg}>
                <a href="#">
                    <img src={pic10} alt="pic10"/>
                </a>
            </div>
            <div className={styles.productTitle}>
                <a href="#">
                    Đường mây qua xứ tuyết (Tái bản 2021)
                </a>
            </div>
        </div>
    </div>

  )
}

export default AuthorBook;