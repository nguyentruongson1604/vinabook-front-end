import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
function ShortDescription() {
  return (
      <div className={styles.shortDescription}>
          <div className={styles.shortTitle}>
              Nối tiếp câu chuyện và tinh thần của tập 1 và tập 2, “Muôn Kiếp Nhân Sinh – tập 3” tiếp tục đưa bạn đọc đi qua hành
              trình thức tỉnh tâm linh của nhân vật chính Thomas. Không chỉ là hồi tiếp theo trong chuyến phiêu lưu của linh hồn, tập
              mới ...
          </div>
          <div className={styles.shortMore}>
              <a href="">
                  <FontAwesomeIcon icon={faAngleRight} className={styles.iconAngleRight}/>
                  Xem thêm
              </a>
          </div>
      </div>
  )
}

export default ShortDescription;