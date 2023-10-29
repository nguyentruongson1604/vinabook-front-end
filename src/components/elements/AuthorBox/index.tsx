/* eslint-disable jsx-a11y/anchor-is-valid */
import { observer } from 'mobx-react'
import style from './style.module.css'
import { IAuthor } from '../../../APIs/author.api'
import { Link } from 'react-router-dom'

const AuthorBox = observer(({author}: {author: IAuthor}) => {
    return(
        <div className={style.authorBox}>
            <div className={style.title}>Thông tin tác giả</div>
            <div className={style.authorDescriptionWrap}>
                <div className="authorDescription">
                    <div className={style.authorName}>
                        <Link to={`/author/${author._id}`}>{author.name}</Link>
                    </div>
                </div>
                <ul className={style.authorFullLink}>
                    <li><Link to={`/author/${author._id}`}>Vào trang riêng của tác giả</Link></li>
                    <li><Link to={`/author/${author._id}`}>Xem tất cả các sách của tác giả</Link></li>
                </ul>
            </div>
        </div>
    )
})

export default AuthorBox