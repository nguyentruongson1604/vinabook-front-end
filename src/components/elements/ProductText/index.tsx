import { observer } from 'mobx-react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
const ProductText = observer(({title, id}: {title: string, id: string}) => {
  return (
        <Link to={`/details/${id}`} className={styles.productText}>
            {title}
        </Link>
  )
})

export default ProductText;