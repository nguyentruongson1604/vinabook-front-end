import styles from './style.module.css';
import AuthorMore from '../../elements/AuthorMore';
import AuthorBook from '../../elements/AuthorBook';

function FamousAuthor() {
  return (
    <div className={styles.famousAuthor}>
        <div className="container">
            <AuthorMore/>
            <AuthorBook/>
        </div>
    </div>

  )
}

export default FamousAuthor;