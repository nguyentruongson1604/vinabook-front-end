import { observer } from 'mobx-react';
import styles from './style.module.css';
import { useNavigate } from 'react-router';

const ProductThumbImg = observer(({imgUrl, id}: {imgUrl: string, id: string}) => {
  const navigate = useNavigate()
  return (
        <div className={styles.productThumbImg}>
            <a href="" onClick={()=>{navigate(`/details/${id}`)}}>
                <img src={imgUrl} alt="sach"/>
            </a>
        </div> 
  )
})

export default ProductThumbImg;