import styles from './style.module.css'
import visa from '../../images/visa.jpg'
import master_card from '../../images/master_card_2x.jpg'
import payoo from '../../images/payoo_2x.jpg'
import icon_ship from '../../images/icon_giaohang_2x.jpg'
import icon_hotline from '../../images/icon_hotline_2x.jpg'
import icon_book from '../../images/icon_tuasach_2x.jpg'
import icon_ggplay from '../../images/icon-googleplay.png'

const ResponsiveFooter = () => {
    return(
        <div className={styles.rightContentFooter}>
            <div className={styles.colRight}>
                <div className={styles.responsiveFooter}>
                    <ul className={styles.icon}>
                        <li>
                            <img src={icon_hotline} alt="" />
                            <p>HOTLINE</p>
                            <p>19006401</p>
                        </li>
                        <li>
                            <img src={icon_ship} alt="" />  
                            <p>MIỄN PHÍ</p>
                            <p>GIAO HÀNG</p>                      
                        </li>
                        <li>
                            <img src={icon_book} alt="" />
                            <p>80,000</p>
                            <p>TỰA SÁCH</p>
                        </li>
                    </ul>
                    <div className={styles.title}>THANH TOÁN AN TOÀN</div>
                    <ul className={styles.payment}>
                        <li>
                            <img src={visa} alt="" />
                        </li>
                        <li>
                            <img src={master_card} alt="" />
                        </li>
                        <li>
                            <img src={payoo} alt="" />
                        </li>
                    </ul>
                    <div className={styles.title}>VINABOOK APP</div>
                    <div className={styles.appMobi}>
                        <img src={icon_ggplay} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveFooter