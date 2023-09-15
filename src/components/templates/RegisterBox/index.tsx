import RouteLine from '../../collections/RouteLine';
import SmallBoxInfo from '../../collections/SmallBoxInfo';
import FormRegister from '../../elements/FormRegister';
import styles from './style.module.css'
const RegisterBox: React.FC<{className?: string }> = ({className }) => {
    return (
        <div className={className}>
            <RouteLine/>
            <div className="clearfix"></div>
            <div className={styles.ques}>Chưa có tài khoản? Đăng ký ngay</div>
            <div className={styles.mainBox}>
                <div className={styles.leftBox}>
                    <FormRegister/>
                    <p className={styles.policy}>
                    Bằng việc bấm vào nút đăng ký, bạn đã chấp nhận chính sách bảo mật thông tin</p>
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
  
export default RegisterBox