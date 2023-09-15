import Nav from '../../templates/Nav';
import TopHeader from '../../templates/TopHeader';
import BottomHeader from '../../templates/BottomHeader';
import Banner from '../../templates/Banner';
import Footer from '../../templates/Footer';
import HomeLeft from '../../templates/HomeLeft';
import HomeRight from '../../templates/HomeRight';
import styles from './style.module.css'
import AuthorContent from '../../templates/AuthorContent';
const AuthorPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <TopHeader/>
            <BottomHeader/>
            <Nav appear={false}/>
            <div className="clearfix"></div>
            <div className="container">
                <AuthorContent/>
            </div>
            <div className="clearfix"></div>
            <Footer/>
            {/* <AuthorContent/> */}
        </>
    )
};
  
export default AuthorPage