import { observer } from 'mobx-react';
import SmallBoxInfo from '../../collections/SmallBoxInfo';
import styles from './style.module.css'
import { useStore } from '../../../stores/RootStore.store';
import { IBook, IBookCategory } from '../../../stores/childrens/Books.store';
const HomeRight: React.FC<{className?: string }> = observer(({className }) => {
    const store = useStore()
    const listBookCategory = store.BooksStore?.getListBookCategory
    return (
        <div className={className}>
            <div className={styles.HomeRight}>
                {
                    listBookCategory && listBookCategory.map((books: IBookCategory, index: number)=>{
                        if(books.listBook.length > 0){
                            return(
                                <div key={index} className={styles.topWeek}>   
                                    <div className={styles.tittle}>
                                        {books.categoryName}
                                    </div>
                                    <div className={styles.listItem}>
                                        {
                                            books.listBook.map((book: IBook)=>{
                                                return(
                                                    <SmallBoxInfo key={book._id} className={styles.item} book={book}/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                        return <div></div>})
                        
                }
                {/* <div className={styles.topWeek}>   
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
                </div> */}
            </div>
        </div>
    )
});
  
export default HomeRight