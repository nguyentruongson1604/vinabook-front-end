import TopLineToolTip from "../../collections/TopLineToolTip"
import { faTruck, faBook, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const TopHeader = () => {
    return(
        <div>
            <div className={styles.topHeader}>
                <div className="container">
                    <TopLineToolTip/>
                </div>
            </div> 
            <div className="clearfix"></div>
        </div>
    )
}

export default TopHeader