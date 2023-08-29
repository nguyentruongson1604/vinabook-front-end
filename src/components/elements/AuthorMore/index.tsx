import styles from './style.module.css';
import AuthorImg from '../../elements/AuthorImg';
import AuthorInfo from '../../elements/AuthorInfo';
function AuthorMore() {
  return (
    <div className={styles.authorMore}>
        <AuthorImg />
        <AuthorInfo />
    </div>

  )
}

export default AuthorMore;