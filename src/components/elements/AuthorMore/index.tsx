import styles from './style.module.css';
import AuthorImg from '../AuthorImg';
import AuthorInfo from '../AuthorInfo';

interface AuthorMoreProps {
  className?: string;
}
const AuthorMore: React.FC<AuthorMoreProps> = ({ className }) => {
  return (
    <div className={`${styles.authorMore} ${className}`}>
        <AuthorImg />
        <AuthorInfo />
    </div>

  )
}

export default AuthorMore;