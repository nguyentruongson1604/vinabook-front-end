import CategoryInfoBook from '../../collections/CategoryInfoBook';
import DetailTittle from '../../elements/DetailTittle';
import styles from './style.module.css'
const CategoryRight: React.FC<{className?: string }> = ({className }) => {
    return (
        <div className={className}>
            <div className={styles.homeRight}>
                <DetailTittle tittle={'Sách Kinh Tế mới phát hành'}/>
                <div className={styles.newBook}>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                </div>

                <DetailTittle tittle={'Sách Kinh Tế'}/>
                <div className={styles.listBook}>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                    <CategoryInfoBook className={styles.itemBook}/>
                </div>
            </div>
        </div>
    )
};
  
export default CategoryRight