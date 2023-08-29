import styles from './style.module.css';
function AuthorBook() {
  return (
    <div className={styles.authorBook}> 
        <div className={styles.authorProduct}>
            <div className={styles.productImg}>
                <a href="#">
                    <img src='https://www.vinabook.com/images/thumbnails/product/115x/376582_muon-kiep-nhan-sinh-many-times-many-lives-tap-3.jpg' alt="pic8"/>
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
                    <img src='https://www.vinabook.com/images/thumbnails/product/115x/376582_muon-kiep-nhan-sinh-many-times-many-lives-tap-3.jpg' alt="pic9"/>
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
                    <img src='https://www.vinabook.com/images/thumbnails/product/115x/376582_muon-kiep-nhan-sinh-many-times-many-lives-tap-3.jpg' alt="pic10"/>
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