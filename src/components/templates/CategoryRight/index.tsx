import { observer } from 'mobx-react';
import CategoryInfoBook from '../../collections/CategoryInfoBook';
import DetailTittle from '../../elements/DetailTittle';
import styles from './style.module.css'
import { useStore } from '../../../stores/RootStore.store';
import { IBook } from '../../../stores/childrens/Books.store';
import { Pagination } from '@mui/material';
import React from 'react';

const CategoryRight: React.FC<{className?: string, search?: string }> = observer(({className, search}) => {
    const store = useStore()
    const books = store.BooksStore?.getBooks
    const page = store.BooksStore?.getPageNumber
    const category = store.CategoryStore?.currentCategory
    const publisher = store.PublisherStore?.currentPublisher
    // console.log('book cate: ', categoryBooks)
    // if(books?.length === 0){
    //     return <div style={{fontSize: 40, textAlign:'center', position:'relative', top:'100px', color: '#d7dae4'}}>Không có sách</div>
    // }
    async function handlePagination (event: React.ChangeEvent<any>, page: number) {
        await store.BooksStore?.getBooksSearchAPI({keyWord: search, page: page})
    } 
    return (
        <div className={className}>
            {
                (books && category &&
                <div className={styles.homeRight}>
                    <DetailTittle tittle={`Sách ${category?.name}`}/>
                    {
                        books.length > 0 ? 
                        <div className={styles.newBook}>
                            {
                                books.map((item: IBook)=>{
                                    return(
                                        <CategoryInfoBook key={item._id} className={styles.itemBook} book={item}/>
                                    )
                                })
                            }
                        </div> : 
                        <div style={{fontSize: 40, textAlign:'center', position:'relative', top:'100px', color: '#d7dae4'}}>Không có sách</div>
                    }
                    {+page! !== 0 && <div className={styles.pagination}>
                        <Pagination count={page} shape='rounded' size='large' onChange={handlePagination}/>
                    </div>}
                </div>)
                ||
                (books && publisher &&
                <div className={styles.homeRight}>
                    <DetailTittle tittle={`Nhà xuất bản ${publisher?.name}`}/>
                    {
                        books.length > 0 ? 
                        <div className={styles.newBook}>
                        {
                            books.map((item: IBook)=>{
                                return(
                                    <CategoryInfoBook key={item._id} className={styles.itemBook} book={item}/>
                                )
                            })
                        }
                    </div> : 
                        <div style={{fontSize: 40, textAlign:'center', position:'relative', top:'100px', color: '#d7dae4'}}>Không có sách</div>
                    }
                    {+page! !== 0 && <div className={styles.pagination}>
                        <Pagination count={page} shape='rounded' size='large' onChange={handlePagination}/>
                    </div>}
                </div>)
                ||
                (books && search !== null &&
                <div className={styles.homeRight}>
                    <DetailTittle tittle={`Kết quả tìm kiếm: ${search}`}/>
                    {
                        books.length > 0 ? 
                        <div className={styles.newBook}>
                        {
                            books.map((item: IBook)=>{
                                return(
                                    <CategoryInfoBook key={item._id} className={styles.itemBook} book={item}/>
                                )
                            })
                        }
                        </div> : 
                        <div style={{fontSize: 40, textAlign:'center', position:'relative', top:'100px', color: '#d7dae4'}}>Không có sách</div>
                    }
                    {+page! !== 0 && <div className={styles.pagination}>
                        <Pagination count={page} shape='rounded' size='large' onChange={handlePagination}/>
                    </div>}
                </div>)
            }
        </div>
    )
});
  
export default CategoryRight