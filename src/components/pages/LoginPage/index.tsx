import Nav from '../../templates/Nav';
import TopHeader from '../../templates/TopHeader';
import BottomHeader from '../../templates/BottomHeader';
import Banner from '../../templates/Banner';
import Footer from '../../templates/Footer';
import HomeLeft from '../../templates/HomeLeft';
import HomeRight from '../../templates/HomeRight';
import styles from './style.module.css'
import LoginBox from '../../templates/LoginBox';
const LoginPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <TopHeader/>
            <BottomHeader/>
            <Nav appear={false}/>
            
            <div className="container">
                <LoginBox className= {styles.loginBox}/>
            </div>
            <div className="clearfix"></div>
            <Footer/>
        </>
    )
};
  
export default LoginPage