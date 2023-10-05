import styles from './style.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return(
        <div className={styles.login}>
            <Link to='login'>Đăng nhập</Link>
            <p>|</p>    
            <Link to='register'>Đăng kí</Link>  
        </div>
    )
}

export default Login