import Nav from '../../templates/Nav';
import styles from './style.module.css'
import InfoUserBox from '../../templates/InfoUserBox';
import { observer } from 'mobx-react';

const InfoUserPage: React.FC<{className?: string }> = observer(({className }) => {
    return (
        <>
            <Nav appear={false}/>
            
            <div className="container">
                <InfoUserBox className= {styles.loginBox}/>
            </div>
            <div className="clearfix"></div>
        </>
    )
});
  
export default InfoUserPage