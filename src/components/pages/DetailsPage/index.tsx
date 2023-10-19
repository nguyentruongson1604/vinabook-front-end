import { observer } from 'mobx-react'
import Nav from '../../templates/Nav'
import ProductFullDescription from '../../templates/ProductFullDescription'
import style from './style.module.css'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useStore } from '../../../stores/RootStore.store'

const DetailsPage = observer(() => {
    const store = useStore()
    const params = useParams()
    const bookId = params.bookId as string
    
    useEffect(()=>{
        store.BooksStore?.getCurrentBookAPI(bookId)
    }, [])

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