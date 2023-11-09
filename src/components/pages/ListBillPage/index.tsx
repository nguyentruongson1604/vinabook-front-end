import RouteLine from '../../collections/RouteLine';
import SuccessNotice from '../../elements/SuccessNotice';
import CollapsibleTable from '../../elements/TableBill';
import styles from './style.module.css'

const ListBillPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <div className="container">
            <div className={styles.tittle}>Đơn hàng</div>
            <div className={styles.boxList}>
                <CollapsibleTable/>
            </div>
        </div>

    )
};
  
export default ListBillPage