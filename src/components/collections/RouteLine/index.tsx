import RouteTitle from '../../elements/RouteTitle'
import styles from './style.module.css'

const RouteLine: React.FC<{className?: string}> = ({ className}) => {
    return(
        <div className={className}>
            <ul className={styles.line}>
                <RouteTitle title='Trang chủ' />
                <RouteTitle title='Sách Thường Thức – Đời Sống' />
                <RouteTitle title='Gia dinh' />
                <RouteTitle title='Ten sach' />
            </ul>  
            <div className="clearfix"></div>          
        </div>
    )
}

export default RouteLine