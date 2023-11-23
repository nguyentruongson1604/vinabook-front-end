import styles from './style.module.css'
import appleLogo from '../../images/icon-appstore.png'
import chPlayLogo from '../../images/icon-googleplay.png'
const LeftFooterContent = () => {
    return(
        <div className={styles.leftContentFooter}>
            <div className={styles.colLeftInfo}>
                <div className={styles.content}>
                    <span className={styles.title}>
                    Về Công Ty
                    </span>
                    <ul>
                        <li><a href="#">Giới thiệu công ty</a></li>
                        <li><a href="#">Tuyển dụng</a></li>
                        <li><a href="#">Báo chí</a></li>
                        <li><a href="#">Chương trình đại lý</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                        <li><a href="#">Chính sách đổi trả</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.colLeftInfo}>
                <div className={styles.content}>
                    <span className={styles.title}>
                    Trợ giúp
                    </span>
                    <ul>
                        <li><a href="#">Quy trình sử dụng</a></li>
                        <li><a href="#">Hướng dẫn mua hàng</a></li>
                        <li><a href="#">Phương thức thanh toán</a></li>
                        <li><a href="#">Phương thức vận chuyển</a></li>
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                        <li><a href="#">Ứng dụng đọc</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.colLeftInfo}>
                <div className={styles.content}>
                    <span className={styles.title}>
                    Tin tức sách
                    </span>
                    <ul>
                        <li><a href="#">Tin tức</a></li>
                        <li><a href="#">Chân dung</a></li>
                        <li><a href="#">Điểm sách</a></li>
                        <li><a href="#">Phê bình</a></li>
                    </ul>
                </div>
            </div>
            
            <div className={styles.colLeftApp}>
                <div className={styles.content}>
                    <span className={styles.title}>Tải ứng dụng trên điện thoại</span>
                </div>
                <figure className={styles.logoApp}>
                    <span><a href=""><img src={appleLogo} alt="" /></a></span>
                    <span><a href=""><img src={chPlayLogo} alt="" /></a></span>
                </figure>
            </div>
        </div>
    )
}

export default LeftFooterContent