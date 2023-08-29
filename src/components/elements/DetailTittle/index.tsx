import clsx from 'clsx';
import styles from './style.module.css'
const DetailTittle: React.FC<{ tittle?: string ,className?: string}> = ({ tittle, className}) => {    
    return(
        <div className={className}>  
            <h2 className={styles.DetailTittle}>{tittle}</h2>                
        </div>
    )
}
export default DetailTittle