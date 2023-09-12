import style from './style.module.css'

const ProductTab = () => {
    return(
        <div className={style.productNavTab}>
            <ul>
                <li className='fullDescrition'>
                    <a href="#intro">Giới thiệu sách</a>
                </li>
                <li className='fullDetailsInfo'>
                    <a href="#details">Thông tin chi tiết</a>
                </li>
            </ul>
        </div>
    )
}

export default ProductTab