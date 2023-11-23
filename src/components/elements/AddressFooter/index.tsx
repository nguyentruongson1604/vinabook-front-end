import styles from './style.module.css'
import logo from '../../images/logo_vnb1_2x.png'

const AddressFooter = () => {
    return(
        <div className={styles.addressCompany}>
            <div className={styles.logoImg}><img src={logo} alt="" /></div>
            <p className={styles.nameCompany}>
            CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ MÊ KÔNG COM
            </p>
            <span>
            Địa chỉ: 52/2 Thoại Ngọc Hầu, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh
            </span>
            <br/>
            <span>
            MST: 0303615027 do Sở Kế Hoạch Và Đầu Tư Tp.HCM cấp ngày 10/03/2011
            </span>
            <br/>
            <span>
            Tel: 028.73008182 - Fax: 028.39733234 - Email: 
            <a href="#">hotro@vinabook.com</a>
            </span>
        </div>
    )
}

export default AddressFooter