import AuthorBox from '../../elements/AuthorBox'
import style from './style.module.css'

const MainboxProduct = () => {
    return(
        <div className={style.mainBoxProduct} id='intro'>
            <h3 className={style.title}>
                Cây Chuối Non Đi Giày Xanh (Bìa Mềm)				
            </h3>
            <div className={style.mainBox}>
                <div className={style.fullDescription}>
                    <div className={style.authorBox}>
                        <AuthorBox />
                    </div>
                    <div className={style.content}>
                        <p>
                            Dù bạn nhỏ tò mò về công việc của bác sĩ hay muốn tự chăm sóc bản thân, giúp đỡ mọi người, cuốn sách này sẽ hỗ trợ ít nhiều. Làm sao để xì mũi đúng cách? Viêm amidan có được ăn kem không? Bị lây chấy phải làm gì? Tại sao cần uống đủ nước? Xử trí nhiệt miệng thế nào?Hơn hết, Sổ tay bác sĩ nhí cung cấp những thông tin về các bệnh thường gặp, giúp độc giả nhí tự trang bị kiến thức để từ đó hiểu về cơ thể, chủ động hợp tác với bố mẹ và bác sĩ để cùng chăm sóc sức khoẻ. Xen kẽ thông tin khoa học là những minh hoạ hài hước, sinh động, cùng lối truyền tải đối thoại thân thiện, chắc chắn độc giả nhí sẽ không thể rời mắt khỏi cuốn sách dù chỉ một giây.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainboxProduct