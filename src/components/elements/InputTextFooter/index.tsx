import styles from './style.module.css'

const InputTextFooter = ({title, width}: {title: string, width: number | string}) => {
    return(
        <input type="text" className={styles.inputText} placeholder={title} required style={{width: width}}/>
    )
}

export default InputTextFooter