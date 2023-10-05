import Nav from '../../templates/Nav';
import styles from './style.module.css'
import LoginBox from '../../templates/LoginBox';

const LoginPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <Nav appear={false}/>
            <div className="container">
                <LoginBox className= {styles.loginBox}/>
            </div>
            <div className="clearfix"></div>
        </>
    )
};
  
export default LoginPage