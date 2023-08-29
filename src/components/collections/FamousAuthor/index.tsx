import AuthorBook from '../../elements/AuthorBook';
import AuthorMore from '../../elements/AuthorMore';
import styles from './style.module.css';
function FamousAuthor() {
  return (
    <div className={styles.famousAuthor}>
            <AuthorMore/>
            <AuthorBook/>
            <div className="clearfix"></div>
    </div>

  )
}

export default FamousAuthor;