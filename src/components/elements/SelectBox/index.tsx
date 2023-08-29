import styles from './style.module.css'

const SelectBox = () => {
    return(
        <select className={styles.selectName}>
            <option value="">Thể loại yêu thích</option>
            <option value="">Tất cả</option>
            <option value="">Sách Ngoại Văn</option>
        </select>
    )
}

export default SelectBox