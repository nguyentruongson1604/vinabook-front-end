import styles from './style.module.css'

const ProductInfo = ({title, author, company, publicCompany, intro}: {title: string, author: string, company: string, publicCompany: string, intro: string}) => {
    return(
        <div className='productInfo'>
            <h1 className={styles.mainBoxTitle}>
                {title}
            </h1>
            <div className={styles.productAuthor}>
                <div className={styles.productAuthorShare}>
                    <span>Tác giả: </span>
                    <a href="#">{author}</a>
                    <br />
                    <span>Nhà xuất bản: </span>
                    <a href="#">{company}</a>
                    <br />
                    <span>Nhà phát hành: </span>
                    <a href="#">{publicCompany}</a>
                </div>
            </div>
            <div className='clear'></div>
            <div className={styles.productIntro}>  
                <p>
                    {intro}
                </p>
                <a className={styles.xemThem} href="#intro">Xem thêm</a>
            </div>
            
        </div>
    )
}

export default ProductInfo