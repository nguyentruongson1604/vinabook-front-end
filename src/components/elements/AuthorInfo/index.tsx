import styles from './style.module.css';
import pic7 from '../../images/pic7.jpg';
import pic8 from '../../images/pic8.jpg';
import pic9 from '../../images/pic9.jpg';
import pic10 from '../../images/pic10.jpg';
function AuthorInfo() {
  return (
        <div className={styles.authorInfo}>
            <div className={styles.authorName}>
                <a href="#">Nguyên Phong</a>
            </div>
            <div className={styles.authorText}>
                Nguyên Phong tên thật là Vũ Văn Du, sinh năm 1950 tại Hà Nội. Năm 1968, ông rời khỏi Việt Nam, sang Hoa Kỳ du học hai
                nghành Sinh vật học và Điện toán, sau đó ông sống và làm việc tại Hoa Kỳ cho đến nay.Bên cạnh vai trò là một nhà khoa
                học, Nguyên Phong còn là dịch giả của hàng loạt sách về văn hóa và tâm linh phương Đông rất nổi tiếng. Trong số đó, có
                thể kể đến: Hành Trình Về Phương Đông, Ngọc Sáng Trong Hoa Sen, Bên Rặng Tuyết Sơn, Hoa Sen Trên Tuyết, Hoa Trôi Trên
                Sóng Nước, Trở Về Từ Xứ Tuyết, Minh Triết Trong Đời Sống Ăn Uống, Đường Mây Qua Xứ Tuyết…
                <a href="#">Xem thêm</a>
            </div>
        </div>
  )
}

export default AuthorInfo;