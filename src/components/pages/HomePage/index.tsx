import Nav from '../../templates/Nav';
import Banner from '../../templates/Banner';
import HomeLeft from '../../templates/HomeLeft';
import HomeRight from '../../templates/HomeRight';
import styles from './style.module.css'
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useStore } from '../../../stores/RootStore.store';
import { ICategory } from '../../../APIs/category.api';
import { getBooksByCategory } from '../../../APIs/book.api';

const HomePage: React.FC<{className?: string }> = observer(({className }) => {
    const store = useStore()

    const fetchCategories = async () => {
        await store.CategoryStore?.getAllCategorysAPI()
        if (store.CategoryStore?.getAllCategories) {
            // console.log('length ', store.CategoryStore.getAllCategories.length)
            store.CategoryStore?.getAllCategories.map(async (item: ICategory) => {
                await store.AuthorStore?.getAuthorsByCategoryAPI(item._id!)
                await store.PublisherStore?.getPublishersByCategoryAPI(item._id!)
                const res = await getBooksByCategory(item._id!)
                const books = {
                    categoryId: item._id!,
                    categoryName: item.name!,
                    listBook: res?.data.data
                }
                store.BooksStore?.setListBookCategory(books)
            })
        }
    }

    useEffect(()=>{
        fetchCategories()
    }, [])
    return (
        <>
            <Nav appear={true}/>
            <Banner/>
            <div className="container">
                <HomeLeft className={styles.homeLeft}/>
                <HomeRight className={styles.homeRight}/>
            </div>
            <div className="clearfix"></div>
        </>
    )
});
  
export default HomePage