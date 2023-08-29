import styles from './style.module.css';
function AuthorImg() {
  return (
        <div className={styles.authorImg}>
            <a href="#">
                <img src='https://www.vinabook.com/images/thumbnails/author/210x/360353_129910542144506789460598800290180602601678n1.jpg' alt="nguyenphong" className={styles.authorPic}/>
            </a>
        </div>
  )
}

export default AuthorImg;