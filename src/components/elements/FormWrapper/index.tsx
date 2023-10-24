import styles from './style.module.css'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
const FormWrapper = () => {
    const [text, setText] = useState("")
    return(
        <form action="http://localhost:3000/search" className={styles.formWrapper}>
            <div className="combo-box">
                <div className={styles.inputGroup}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    <input type="text" name="keyword" id="search" placeholder='Tìm kiếm tựa sách, tác giả' className='input-content'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setText(event.target.value)}} value={text}/>
                    <button type="submit" className={styles.buttonSubmit}>Tìm sách</button>
                </div>
            </div>
        </form>
        
    )
}

export default FormWrapper