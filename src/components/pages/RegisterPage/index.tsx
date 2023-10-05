import Nav from '../../templates/Nav';
import styles from './style.module.css'
import RegisterBox from '../../templates/RegisterBox';

const RegisterPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <Nav appear={false}/>
            
            <div className="container">
                <RegisterBox className= {styles.loginBox}/>
            </div>
            <div className="clearfix"></div>
        </>
    )
};
  
export default RegisterPage