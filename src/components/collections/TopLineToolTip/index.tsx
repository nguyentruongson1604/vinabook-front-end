import TopHeaderToolTip from "../../elements/TopHeaderToolTip"
import { faTruck, faBook, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const TopLineToolTip = () => {
    return(
        <ul className={styles.topLineTooltip}>
            <li className={styles.toolTip}>
                <TopHeaderToolTip icon={faTruck} title="Miễn phí giao hàng" content="Miễn phí giao hàng toàn quốc cho Đơn hàng từ 250.000đ." />
            </li>
            <li className={styles.toolTip}>
                <TopHeaderToolTip icon={faBook} title="80,000 đầu sách" content="Với hơn 80,000 đầu sách trong mọi lĩnh vực (và tiếp tục tăng mỗi ngày), Vinabook.com tự hào là nhà sách trên mạng có số lượng đầu sách lớn nhất Việt Nam, bạn có thể tìm được bất kỳ quyển sách nào cho mọi nhu cầu đọc sách của bạn." />
            </li>
            <li className={styles.toolTip}>
                <TopHeaderToolTip icon={faMobileAlt} title="Vinabook Reader" content="Hơn 10,000 tựa sách và tạp chí trong thư viện sách khổng lồ của Vinabook Reader mọi lúc mọi nơi chỉ từ 825đ/ngày" />
            </li>
        </ul>
    )
}

export default TopLineToolTip