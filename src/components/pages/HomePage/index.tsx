import Nav from '../../templates/Nav';
import Banner from '../../templates/Banner';
import HomeLeft from '../../templates/HomeLeft';
import HomeRight from '../../templates/HomeRight';
import styles from './style.module.css'
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useStore } from '../../../stores/RootStore.store';
import { getBooksByCategory } from '../../../APIs/book.api';
import { ICategoryAndRelation } from '../../../stores/childrens/Categorys.store';

const HomePage: React.FC<{className?: string }> = observer(({className }) => {
    const store = useStore()
    const [loading, setLoading] = useState(true);
    const fetchCategories = async () => {
        await store.CategoryStore?.getCategoriesAndRelationAPI()

        if (store.CategoryStore?.getCategoriesAndRelation) {
            setLoading(true)
            // console.log('length ', store.CategoryStore.getAllCategories.length)
            const pendingData =  store.CategoryStore?.getCategoriesAndRelation.map(async (item: ICategoryAndRelation) => {
                const res = await getBooksByCategory(item._id!, {
                    page: 1
                })
                const books = {
                    categoryId: item._id!,
                    categoryName: item.name!,
                    listBook: res?.data.data
                }
                store.BooksStore?.setListBookCategory(books)
            })
            await Promise.all(pendingData)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchCategories()
    }, [])

    if(loading) return <div>Loading...</div>
    return (
        <div className={styles.home}>
            <Nav appear={true}/>
            <Banner/>
            <div className="container">
                <HomeLeft className={styles.homeLeft}/>
                {/* <HomeRight className={styles.homeRight}/> */}
            </div>
            <div className="clearfix"></div>
        </div>
    )
});
  
export default HomePage