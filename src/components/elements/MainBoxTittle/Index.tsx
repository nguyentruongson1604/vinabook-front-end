import clsx from 'clsx';
import styles from './Style.module.css'
const MainBoxTittle: React.FC<{ tittle?: string, appear: boolean ,className?: string}> = ({ tittle,appear, className}) => {    
    return(
        <div className={className}>        
            <div className={styles.boxTittle}>
                <p>{tittle}</p>
                {appear && (<a href="#">Xem thêm &gt;</a>)}
            </div>           
        </div>
    )
}
export default MainBoxTittle