import { observer } from 'mobx-react';
import BoxHighlight from '../../collections/BoxHighlight/Index';
import BoxInfoBook from '../../collections/BoxInfoBook/Index';
import FamousAuthor from '../../collections/FamousAuthor';
import MainBoxTittle from '../../elements/MainBoxTittle/Index';
import styles from './style.module.css'
import { useStore } from '../../../stores/RootStore.store';
import { IBook, IBookCategory } from '../../../stores/childrens/Books.store';
const HomeLeft: React.FC<{className?: string }> = observer(({className }) => {
    const store = useStore()
    const listBookCategory = store.BooksStore?.getListBookCategory

    return (
        <div className={className}>
            {
                listBookCategory && listBookCategory.map((item: IBookCategory, index: number)=>{
                    // console.log('index',index)
                    if(item.listBook.length > 0){
                        let color
                        (index) % 2 ? color = '#f26c63' : color = '#0a6f3c'
                        return(
                            <div key={index}>
                                <MainBoxTittle tittle={'Sách nổi bật ' + item.categoryName} appear= {false}/>
                                <BoxHighlight background_color={color} book={item.listBook[0]}/>
                                <MainBoxTittle tittle={'Sách ' + item.categoryName} appear= {true}/>
                                <div className={styles.boxInforWrapper}>
                                    {
                                        item.listBook.map((book: IBook)=>{
                                            return(
                                                <BoxInfoBook key={book._id} className={styles.span4} book={book}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                })
            }
            

            {/* <MainBoxTittle tittle={'Sách Hay'} appear= {false}/>
            <BoxHighlight background_color={'#0a6f3c'}/>
            <MainBoxTittle tittle={'Sách Văn Học Mới'} appear= {true}/>
            <div className={styles.boxInforWrapper}>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
            </div>
            
            <MainBoxTittle tittle={'Truyện Tranh'} appear= {false}/>
            <BoxHighlight background_color={'#cf1133'}/>
            <MainBoxTittle tittle={'Sách Kinh Tế Mới'} appear= {true}/>
            <div className={styles.boxInforWrapper}>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
            </div>

            <FamousAuthor/>
            <MainBoxTittle tittle={'Tạp Chí Bán Chạy Nhất'} appear= {true}/>
            <div className={styles.boxInforWrapper}>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
            </div> */}
        </div>
    )
});
  
export default HomeLeft