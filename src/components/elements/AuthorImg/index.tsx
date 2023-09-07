import styles from './style.module.css';
import pic7 from '../../images/pic7.jpg';
import pic8 from '../../images/pic8.jpg';
import pic9 from '../../images/pic9.jpg';
import pic10 from '../../images/pic10.jpg';
function AuthorImg() {
  return (
        <div className={styles.authorImg}>
            <a href="#">
                <img src={pic7} alt="nguyenphong" className={styles.authorPic}/>
            </a>
        </div>
  )
}

export default AuthorImg;