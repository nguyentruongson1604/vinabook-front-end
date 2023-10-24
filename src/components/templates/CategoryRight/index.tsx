import { observer } from 'mobx-react';
import CategoryInfoBook from '../../collections/CategoryInfoBook';
import DetailTittle from '../../elements/DetailTittle';
import styles from './style.module.css'
import { useStore } from '../../../stores/RootStore.store';
import { IBook } from '../../../stores/childrens/Books.store';
const CategoryRight: React.FC<{className?: string }> = observer(({className }) => {
    const store = useStore()
    const categoryBooks = store.BooksStore?.getBooks
    const category = store.CategoryStore?.currentCategory
    const publisherBooks = store.BooksStore?.getBooks
    const publisher = store.PublisherStore?.currentPublisher
    // console.log('book cate: ', categoryBooks)
    return (
        <div className={className}>
            {
                (categoryBooks && category &&
                <div className={styles.homeRight}>
                    <DetailTittle tittle={`Sách ${category?.name}`}/>
                    <div className={styles.newBook}>
                        {
                            categoryBooks.map((item: IBook)=>{
                                return(
                                    <CategoryInfoBook key={item._id} className={styles.itemBook} book={item}/>
                                )
                            })
                        }
                    </div>
                </div>)
                ||
                (publisherBooks && publisher &&
                <div className={styles.homeRight}>
                    <DetailTittle tittle={`Nhà xuất bản ${publisher?.name}`}/>
                    <div className={styles.newBook}>
                        {
                            publisherBooks.map((item: IBook)=>{
                                return(
                                    <CategoryInfoBook key={item._id} className={styles.itemBook} book={item}/>
                                )
                            })
                        }
                    </div>
                </div>)
            }
        </div>
    )
});
  
export default CategoryRight