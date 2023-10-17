import { observer } from 'mobx-react';
import RouteLine from '../../collections/RouteLine';
import FormUpdateUser from '../../elements/FormUpdateUser';
import styles from './style.module.css'
const InfoUserBox: React.FC<{className?: string }> = observer(({className }) => {
    return (
        <div className={className}>
            <RouteLine/>
            <div className="clearfix"></div>
            <div className={styles.mainBox}>
                <div className={styles.leftBox}>
                    <FormUpdateUser/>  
                </div>
            </div>
            
        </div>
    )
});
  
export default InfoUserBox