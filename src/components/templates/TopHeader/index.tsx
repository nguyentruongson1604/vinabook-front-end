import TopLineToolTip from "../../collections/TopLineToolTip"
import { faTruck, faBook, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const TopHeader = () => {
    return(
        <div className={styles.topHeader}>
            <div className="container">
                <TopLineToolTip/>
            </div>
        </div> 
    )
}

export default TopHeader