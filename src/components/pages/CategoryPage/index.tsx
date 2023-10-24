import styles from './style.module.css';
import LeftContent from '../../collections/LeftContent';
import RouteLine from '../../collections/RouteLine';
import CategoryRight from '../../templates/CategoryRight';
import Nav from '../../templates/Nav';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import { useStore } from '../../../stores/RootStore.store';
import { useEffect, useState } from 'react';

const CategoryPage = observer(() => {
    const [loading, setLoading] = useState(true);
    const {publisherId} = useParams()
    const {categoryId} = useParams()
    // console.log('cate:', categoryId, 'publish:', publisherId)
    const store = useStore()
    const fetchCategories = async () => {
        setLoading(true)
        await store.CategoryStore?.getCategoriesAndRelationAPI()
        setLoading(false)
    }

    useEffect(()=>{
        fetchCategories()
        if(categoryId){
            store.BooksStore?.getBooksOfCategoryAPI(categoryId!)
            store.CategoryStore?.getCategoryByIdAPI(categoryId!)
        }
        else{
            store.BooksStore?.getBooksOfPublisherAPI(publisherId!)
            store.PublisherStore?.getPublisherByIdAPI(publisherId!)
        }
    }, [])
    if(loading) return <div>Loading....</div>
    return (
        <div >
            <Nav appear={false}/>
            <div className="container">
                <RouteLine className={styles.rouLine} category={store.CategoryStore?.currentCategory} publisher={store.PublisherStore?.currentPublisher}/>
                <div className="clearfix"></div>
                <div className={styles.authorContent}>
                    <div className={styles.styleLeft}>
                        <LeftContent/>
                    </div>
                    <div className={styles.styleRight}>
                        <CategoryRight/>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>   
    )
  })

export default CategoryPage;