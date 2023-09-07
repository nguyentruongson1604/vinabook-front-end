import style from './style.module.css'

const ProductFullDetails = () => {
    return(
        <div style={{float: 'left'}} id='details'>
            <h3 className={style.title}>Thông tin chi tiết</h3>
            <div className={style.body}>
                <div className={style.productFeature}>
                    <ul>
                        <li>
                            <strong>Tác giả: </strong>
                            <span>Nhiều tác giả</span>
                            <br />
                        </li>
                        <li>
                            <strong>Nhà xuất bản: </strong>
                            <a href='#'>Forbes Vietnam</a>
                            <br />
                        </li>
                        <li>
                            <strong>Mã Sản phẩm: </strong>
                            <span>8938539857005</span>
                            <br />
                        </li>
                        <li>
                            <strong>Ngôn ngữ:  </strong>
                            <span>Tiếng Việt</span>
                            <br />
                        </li>
                        <li>
                            <strong>Ngày phát hành: </strong>
                            <span>03/2023</span>
                            <br />
                        </li>
                        <li>
                            <strong>Số trang: </strong>
                            <span>112</span>
                            <br />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductFullDetails