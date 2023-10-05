import styles from './style.module.css'
import Logo from '../../elements/Logo'
import FormWrapper from '../../elements/FormWrapper'
import LogoCard from '../../elements/LogoCard'
import Login from '../../elements/Login'
const BottomHeader = () => {
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
}

export default BottomHeader