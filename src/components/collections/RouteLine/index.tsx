import RouteTitle from '../../elements/RouteTitle'
import styles from './style.module.css'

const RouteLine = () => {
    return(
        <div>
            <ul className={styles.line}>
                <RouteTitle title='Trang chủ' />
                <RouteTitle title='Sách Thường Thức – Đời Sống' />
                <RouteTitle title='Gia dinh' />
                <RouteTitle title='Ten sach' />
            </ul>
        </div>
    )
}

export default RouteLine