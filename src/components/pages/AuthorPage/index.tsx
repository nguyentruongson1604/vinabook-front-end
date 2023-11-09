import Nav from '../../templates/Nav';
import styles from './style.module.css'
import AuthorContent from '../../templates/AuthorContent';
import { useLocation, useParams } from 'react-router';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useStore } from '../../../stores/RootStore.store';

const AuthorPage: React.FC<{className?: string }> = observer(({className }) => {
    const [loading, setLoading] = useState(true);
    const {authorId} = useParams()
    const store = useStore()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const page = searchParams.get('page')

    const fetchCategories = async () => {
        setLoading(true)
        await store.CategoryStore?.getCategoriesAndRelationAPI()
        setLoading(false)
    }

    useEffect(()=>{
        if(page){
            store.BooksStore?.getBooksOfAuthorAPI(authorId!, {page: parseInt(page)})
        }
        else{
            store.BooksStore?.getBooksOfAuthorAPI(authorId!, {page: 1})
        }
        fetchCategories()
    }, [])
    if(loading) return <div>Loading....</div>
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