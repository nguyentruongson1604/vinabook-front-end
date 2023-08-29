import styles from './style.module.css';
import pic11 from '../../images/pic11.jpg'
const ProductThumbImg =() => {
  return (
        <div className={styles.productThumbImg}>
            <a href="">
                <img src={pic11} alt="sach"/>
            </a>
        </div> 
  )
}

export default ProductThumbImg;