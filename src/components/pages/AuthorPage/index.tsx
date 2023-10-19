import Nav from '../../templates/Nav';
import styles from './style.module.css'
import AuthorContent from '../../templates/AuthorContent';
import { useParams } from 'react-router';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useStore } from '../../../stores/RootStore.store';
import { ICategory } from '../../../APIs/category.api';
const AuthorPage: React.FC<{className?: string }> = observer(({className }) => {
    const {authorId} = useParams()
    const store = useStore()

    const fetchCategories = async () => {
        await store.CategoryStore?.getAllCategorysAPI()
        if (store.CategoryStore?.getAllCategories) {
            store.CategoryStore?.getAllCategories.map(async (item: ICategory) => {
                console.log('run here')
                await store.AuthorStore?.getAuthorsByCategoryAPI(item._id!)
                await store.PublisherStore?.getPublishersByCategoryAPI(item._id!)
            })
        }
    }

    useEffect(()=>{
        store.BooksStore?.getBooksOfAuthorAPI(authorId!)
        fetchCategories()
    }, [])
    return (
        <>
            <Nav appear={false}/>
            <div className="clearfix"></div>
            <div className="container">
                <AuthorContent/>
            </div>
            <div className="clearfix"></div>
        </>
    )
})
  
export default AuthorPage