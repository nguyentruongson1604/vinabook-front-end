import SmallBoxInfo from '../../collections/SmallBoxInfo';
import styles from './style.module.css'
const HomeRight: React.FC<{className?: string }> = ({className }) => {
    return (
        <div className={className}>
            <div className={styles.HomeRight}>
                <div className={styles.topWeek}>   
                    <div className={styles.tittle}>
                        SÁCH BÁN CHẠY TRONG TUẦN
                    </div>
                    <div className={styles.listItem}>
                        <SmallBoxInfo className={styles.item}/>
                        <SmallBoxInfo className={styles.item}/>
                        <SmallBoxInfo className={styles.item}/>
                    </div>
                </div>

                <div className={styles.introduce}>   
                    <div className={styles.tittle}>
                        BÁO CHÍ GIỚI THIỆU
                    </div>
                    <div className={styles.listItem}>
                        <SmallBoxInfo className={styles.item}/>
                        <SmallBoxInfo className={styles.item}/>
                        <SmallBoxInfo className={styles.item}/>
                    </div>
                </div>

                <div className={styles.new}>   
                    <div className={styles.tittle}>
                        SÁCH MỚI NHẬP VỀ
                    </div>
                    <div className={styles.listItem}>
                        <SmallBoxInfo className={styles.item}/>
                        <SmallBoxInfo className={styles.item}/>
                        <SmallBoxInfo className={styles.item}/>
                    </div>
                </div>

                <div className={styles.story}>   
                    <div className={styles.tittle}>
                        TRUYỆN KỂ BÉ NGHE
                    </div>
                    <div className={styles.listItem}>
                        <SmallBoxInfo className={styles.item}/>
                        <SmallBoxInfo className={styles.item}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
  
export default HomeRight