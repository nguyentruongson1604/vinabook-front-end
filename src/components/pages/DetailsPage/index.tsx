import { observer } from 'mobx-react'
import Nav from '../../templates/Nav'
import ProductFullDescription from '../../templates/ProductFullDescription'
import style from './style.module.css'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useStore } from '../../../stores/RootStore.store'
import { ICategory } from '../../../APIs/category.api'

const DetailsPage = observer(() => {
    const [loading, setLoading] = useState(true);
    const store = useStore()
    const params = useParams()
    const bookId = params.bookId as string
    
    const fetchCategories = async () => {
        setLoading(true)
        await store.CategoryStore?.getCategoriesAndRelationAPI()
        setLoading(false)
    }

    useEffect(()=>{
        fetchCategories()
        store.BooksStore?.getCurrentBookAPI(bookId)
    }, [])
    if(loading) return <div>Loading...</div>
    return(
        <div>
            <Nav appear={false}/>
            <div className="clearfix"></div>
            <div className="container">
                <ProductFullDescription />
            </div>
            <div className="clearfix"></div>
        </div>
    )
})

export default DetailsPage