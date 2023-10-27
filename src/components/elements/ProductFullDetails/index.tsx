/* eslint-disable jsx-a11y/anchor-is-valid */
import { observer } from 'mobx-react'
import { IBook } from '../../../stores/childrens/Books.store'
import style from './style.module.css'
import { useNavigate } from 'react-router'

const ProductFullDetails = observer(({book}: {book: IBook | undefined}) => {
    const navigate = useNavigate()
    return(
        <div style={{float: 'left'}} id='details'>
            <h3 className={style.title}>Thông tin chi tiết</h3>
            {
                book ?
                <div className={style.body}>
                    <div className={style.productFeature}>
                        <ul>
                            <li>
                                <strong>Tác giả: </strong>
                                <span>{book.author.name}</span>
                                <br />
                            </li>
                            <li>
                                <strong>Nhà xuất bản: </strong>
                                <a onClick={()=>{navigate(`/publisher/${book.publisher._id}`)}}>{book.publisher.name}</a>
                                <br />
                            </li>
                            <li>
                                <strong>Mã Sản phẩm: </strong>
                                <span>{book._id}</span>
                                <br />
                            </li>
                            <li>
                                <strong>Ngôn ngữ:  </strong>
                                <span>{book.language}</span>
                                <br />
                            </li>
                            <li>
                                <strong>Giá bìa: </strong>
                                <span><i><b>{book.price}₫</b></i></span>
                                <br />
                            </li>
                            <li>
                                <strong>Số trang: </strong>
                                <span>{book.page}</span>
                                <br />
                            </li>
                        </ul>
                    </div>
                </div> : <div></div>
            }
        </div>
    )
})

export default ProductFullDetails