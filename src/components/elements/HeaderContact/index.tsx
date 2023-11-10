/* eslint-disable jsx-a11y/anchor-is-valid */

import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment } from '@fortawesome/free-solid-svg-icons'

function HeaderContact() {
  return (
    <div className={styles.headerContact}>
        <FontAwesomeIcon icon={faPhone} style={{color: "#fcfcfc",}} className='icon'/>       
        <p>Hotline: 19006401</p>  
        <p className='dash'>|</p>
        <FontAwesomeIcon icon={faComment} style={{color: "#fcfcfc",}} className='icon'/>
        <a href="#">Hỗ trợ trực tuyến</a>
    </div> 
    
  )
}

export default HeaderContact;