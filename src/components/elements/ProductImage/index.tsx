import styles from './style.module.css'

const ProductImage = ({src}: {src: string}) => {
    return(
        <div>
            <img src={src} alt="product" className={styles.productImage}/>
        </div>
    )
}

export default ProductImage