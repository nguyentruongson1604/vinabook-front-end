import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const TopHeaderToolTip = ({icon, title, content}: {icon: IconDefinition, title: string, content: string}) => {
    return (
    <div className={styles.topSupport}>
        <FontAwesomeIcon icon={icon} className={styles.icon}/>
       {title}
        <div className="tooltip-content">
            <span className='arrow'>&nbsp;</span>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    </div>
    )
}

export default TopHeaderToolTip