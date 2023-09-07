import styles from './style.module.css'

const ProductPropRight = ({price, discount, quantity}: {price: number, discount: number, quantity: number}) => {
    const saveMoney = price * discount / 100
    const priceDiscount = price - saveMoney
    return(
        <div className={styles.productPropRight}>
            <div className={styles.title}>Thông tin thanh toán</div>
            <div className="body">
                <div className="mainProps">
                    <div className="productPrice">
                        <div className={styles.price}>
                            <span className='priceLabel'>Giá bìa</span>
                            <span className={styles.rightPrice}>
                                <span className={styles.originalPrice}>{price}</span>
                                <span className={styles.originalPrice}>₫</span>
                            </span>
                        </div>
                        <div className={styles.price}>
                            <span className='priceLabel'>Giá bán</span>
                            <span className={styles.rightPrice}>
                                <span className={styles.sellPrice}>{priceDiscount}</span>
                                <span className={styles.sellPrice}>₫</span>
                            </span>
                        </div>
                        <div className={styles.price}>
                            <span className='priceLabel'>Tiết kiệm</span>
                            <span className={styles.rightPrice}>
                                <span className={styles.discount}>{saveMoney}</span>
                                <span className={styles.discount}>₫  </span>
                                <span className={styles.discount}>(-{discount}%)</span>
                            </span>
                        </div>
                        <div className={styles.price}>
                            <span className='priceLabel'>Số lượng còn</span>
                            <span className={styles.rightPrice}>
                                <span className='value'>{quantity}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttonAddToCart}>
                    <input type="button" value="Add to cart" className={styles.button} />
            </div>
        </div>
    )
}

export default ProductPropRight