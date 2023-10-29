import styles from './style.module.css';
import LeftContent from '../../collections/LeftContent';
import RouteLine from '../../collections/RouteLine';
import CategoryRight from '../../templates/CategoryRight';
import Nav from '../../templates/Nav';
import { observer } from 'mobx-react';
import { useLocation, useParams } from 'react-router';
import { useStore } from '../../../stores/RootStore.store';
import { useEffect, useState } from 'react';

const CategoryPage = observer(() => {
    const [loading, setLoading] = useState(true);

    //get id of author and publisher
    const {publisherId} = useParams()
    const {categoryId} = useParams()

    //get search params
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const keyword = searchParams.get('keyword')
    const page = searchParams.get('page')
    // console.log('params:', keyword, page)

    const store = useStore()
    const fetchCategories = async () => {
        setLoading(true)
        await store.CategoryStore?.getCategoriesAndRelationAPI()
        setLoading(false)
    }

    useEffect(()=>{
        fetchCategories()
        if(categoryId){
            if(page){
                store.BooksStore?.getBooksOfCategoryAPI(categoryId!, {page: parseInt(page)})
            }
            else{
                store.BooksStore?.getBooksOfCategoryAPI(categoryId!, {page: 1, limit: 5})
            }
            store.CategoryStore?.getCategoryByIdAPI(categoryId!)
        }
        else if(publisherId){
            if(page){
                store.BooksStore?.getBooksOfPublisherAPI(publisherId!, {page: parseInt(page)})
            }
            else{
                store.BooksStore?.getBooksOfPublisherAPI(publisherId!, {page: 1, limit: 5})
            }

            store.PublisherStore?.getPublisherByIdAPI(publisherId!)
        }
        else if(keyword !== null){
            if(page){
                store.BooksStore?.getBooksSearchAPI({
                    keyWord: keyword,
                    page: parseInt(page)
                })
            }
            else{
                store.BooksStore?.getBooksSearchAPI({
                    keyWord: keyword,
                    page: 1
                })
            }
        }
    }, [])
    if(loading) return <div>Loading....</div>
    return (
        <div >
            <Nav appear={false}/>
            <div className="container">
                <RouteLine className={styles.rouLine} category={store.CategoryStore?.currentCategory} publisher={store.PublisherStore?.currentPublisher} search={keyword!}/>
                <div className="clearfix"></div>
                <div className={styles.authorContent}>
                    <div className={styles.styleLeft}>
                        <LeftContent/>
                    </div>
                    <div className={styles.styleRight}>
                        <CategoryRight search={keyword!}/>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>   
    )
  })

export default CategoryPage;