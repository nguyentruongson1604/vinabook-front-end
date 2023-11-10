import { Link } from 'react-router-dom';
import styles from './Style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const TittleBoxConfirm: React.FC<{ tittle: string, linkTo?: string,className?: string }> = ({ tittle,linkTo,className }) => {
    return (
      <div className={className}>
      <div className={styles.tittle}>
        <div className={styles.leftTittle}>
          {tittle}
        </div>
        <div className={styles.rightTittle}>
          {
            linkTo ? (<Link to={linkTo} className={styles.link}><FontAwesomeIcon icon={faPenToSquare} /> Sửa</Link>) :(<></>)
          }
          
          </div>
      </div>
      </div>
    );
  };
  
export default TittleBoxConfirm