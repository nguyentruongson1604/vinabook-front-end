import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.module.css'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'

const RouteTitle = ({title}: {title: string}) => {
    return(
        <li className={styles.routeTitle}>
            {title !== 'Trang chủ' ? <FontAwesomeIcon icon={faChevronRight} className={styles.icon} size={'xs'}/> : <span></span>}
            <a href="#" className={styles.route}>
                <span>
                    {title}
                </span>
            </a>
        </li>
    )
}

export default RouteTitle