import styles from './style.module.css'
import visa from '../../images/visa.jpg'
import verifyVisa from '../../images/verify_visa.jpg'
import vnPost from '../../images/vn-post.jpg'
import lazada from '../../images/lazada.jpg'
const RightFooterContent = () => {
    return(
        <div className={styles.rightContentFooter}>
            <div className={styles.colRight}>
                <div className={styles.content}>
                    <span className={styles.title}>CHẤP NHẬN THANH TOÁN</span>
                    <ul>
                        <li>
                            <figure className={styles.payment}>
                                <img src={visa} alt="" />
                                <img src={visa} alt="" />
                                <img src={visa} alt="" />
                                <img src={visa} alt="" />
                                <img src={visa} alt="" />
                                <img src={visa} alt="" />
                            </figure>
                        </li>
                    </ul>
                    <span className={styles.title}>THANH TOÁN AN TOÀN</span>
                    <ul>
                        <li>
                            <figure className={styles.payment}>
                                <img src={verifyVisa} alt="" />
                                <img src={verifyVisa} alt="" />
                                <img src={verifyVisa} alt="" />
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.colRight}>
                <div className={styles.content}>
                    <span className={styles.title}>ĐỐI TÁC VẬN CHUYỂN</span>
                    <ul>
                        <li>
                            <figure className={styles.shipper}>
                                <img src={vnPost} alt="" />
                                <img src={vnPost} alt="" />
                                <img src={vnPost} alt="" />
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.colRight}>
                <div className={styles.content}>
                    <span className={styles.title}>ĐỐI TÁC BÁN HÀNG</span>
                    <ul>
                        <li>
                            <figure className={styles.shipper}>
                                <img src={lazada} alt="" />
                                <img src={lazada} alt="" />
                                <img src={lazada} alt="" />
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RightFooterContent