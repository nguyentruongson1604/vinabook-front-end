import Nav from '../../templates/Nav';
import TopHeader from '../../templates/TopHeader';
import BottomHeader from '../../templates/BottomHeader';
import Footer from '../../templates/Footer';
import styles from './style.module.css'
import RegisterBox from '../../templates/RegisterBox';
const RegisterPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <TopHeader/>
            <BottomHeader/>
            <Nav appear={false}/>
            
            <div className="container">
                <RegisterBox className= {styles.loginBox}/>
            </div>
            <div className="clearfix"></div>
            <Footer/>
            {/* <AuthorContent/> */}
        </>
    )
};
  
export default RegisterPage