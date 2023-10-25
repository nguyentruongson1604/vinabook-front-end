import { observer } from 'mobx-react'
import { useStore } from '../../../stores/RootStore.store'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = observer(() => {
    const [isHoverPopup, setIsHoverPopup] = useState(false);
    const store = useStore()

    const handleLogout = () =>{
        store.userAccess?.setUserAccess(undefined)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
    return(
        <>
            {
                store.userAccess?.userAccess ? (
                    <div className={styles.login} onMouseLeave={() => setIsHoverPopup(false)}>          
                        <Link to='info'
                            onMouseEnter={() => setIsHoverPopup(true)}  
                        >{store.userAccess?.userAccess?.name}</Link>
                        <div 
                            className={styles.headerLoginDropdown}
                            style={{ display: isHoverPopup ? 'block' : 'none' }}
                            
                        >
                            <ul className={styles.accountInfo}>
                                <li><Link to='info'>thông tin cá nhân</Link></li>
                                <li><a href="#">Đơn hàng</a></li>
                                <li><a href="#">Điểm tích lũy</a></li>
                                <li><a href="#">Danh sách ưa thích</a></li>
                            </ul>
                        </div>
                        <p>|</p>    
                        <Link to='/'
                            onClick={handleLogout}
                        >Đăng xuất</Link>  
                    </div>
                ) : (
                    
                    <div className={styles.login}>          
                        <Link to='login'>Đăng nhập</Link>
                        <p>|</p>    
                        <Link to='register'>Đăng kí</Link>  
                    </div>
                    
                )
            }
        </>
    )
})

export default Login