import styles from './style.module.css'
import Logo from '../../elements/Logo'
import FormWrapper from '../../elements/FormWrapper'
import LogoCard from '../../elements/LogoCard'
import Login from '../../elements/Login'
import { observer } from 'mobx-react'
const BottomHeader = observer(() => {
    return(
        <div className={styles.bottomHeader}>
            <div className="container">
                <Logo/>
                <FormWrapper/>
                <LogoCard/>
                <Login/>
            </div>
            
        </div>
        
    )
})

export default BottomHeader