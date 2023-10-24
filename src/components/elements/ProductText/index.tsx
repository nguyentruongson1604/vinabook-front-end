import { observer } from 'mobx-react';
import styles from './style.module.css';
import { useNavigate } from 'react-router';
const ProductText = observer(({title, id}: {title: string, id: string}) => {
  const navigate = useNavigate()
  return (
        <a href="" onClick={()=>{navigate(`/details/${id}`)}} className={styles.productText}>
            {title}
        </a>
  )
})

export default ProductText;