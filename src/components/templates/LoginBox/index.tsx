import RouteLine from '../../collections/RouteLine';
import FormLogin from '../../elements/FormLogin';
import styles from './style.module.css'
const LoginBox: React.FC<{className?: string }> = ({className }) => {
    return (
        <div className={className}>
            <RouteLine/>
            <div className="clearfix"></div>
            <div className={styles.ques}>Đăng nhập</div>
            <div className={styles.mainBox}>
                <div className={styles.leftBox}>
                    <FormLogin/>
                </div>

                <div className={styles.rightBox}>
                    <div className={styles.txt}>Đăng nhập bằng tài khoản khác</div>
                    <a href=""><img src="https://www.vinabook.com/design/themes/vinabook_v5/media/images/addons/hybrid_auth/images/google_signin_dark.png" alt="" className={styles.imgG}/></a>
                    <a href=""><img src="https://www.vinabook.com/design/themes/vinabook_v5/media/images/addons/hybrid_auth/images/facebook_signin_dark.png" alt="" className={styles.imgF}/></a>
                </div>
            </div>
            
        </div>
    )
};
  
export default LoginBox