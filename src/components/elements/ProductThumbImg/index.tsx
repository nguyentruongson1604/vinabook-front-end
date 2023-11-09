import { observer } from 'mobx-react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const ProductThumbImg = observer(({imgUrl, id}: {imgUrl: string, id: string}) => {
  return (
        <div className={styles.productThumbImg}>
            <Link to={`/details/${id}`}>
                <img src={imgUrl} alt="sach"/>
            </Link>
        </div> 
  )
})

export default ProductThumbImg;