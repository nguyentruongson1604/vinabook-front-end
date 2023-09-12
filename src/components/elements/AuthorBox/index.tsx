import style from './style.module.css'

const AuthorBox = () => {
    return(
        <div className={style.authorBox}>
            <div className={style.title}>Thông tin tác giả</div>
            <div className={style.authorDescriptionWrap}>
                <div className="authorDescription">
                    <div className={style.authorName}>
                        <a href="#">Štěpánka Sekaninová</a>
                    </div>
                </div>
                <ul className={style.authorFullLink}>
                    <li><a href="#">Vào trang riêng của tác giả</a></li>
                    <li><a href="#">Xem tất cả các sách của tác giả</a></li>
                </ul>
            </div>
        </div>
    )
}

export default AuthorBox