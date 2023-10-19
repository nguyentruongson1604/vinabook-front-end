import { IAuthor } from '../../../APIs/author.api'
import { ICategory } from '../../../APIs/category.api'
import { IBook } from '../../../stores/childrens/Books.store'
import RouteTitle from '../../elements/RouteTitle'
import styles from './style.module.css'

const RouteLine: React.FC<{className?: string, book?: IBook, author?: IAuthor, category?: ICategory}> = ({ className, book, author, category}) => {

    return(
        <div className={className}>
            {
                (book || author || category) ? 
                <ul className={styles.line}>
                    {
                        (book && 
                        <>
                            <RouteTitle title='Trang chủ' />
                            <RouteTitle title={book.category.name} />
                            <RouteTitle title={book.name} />
                        </>) || 
                        (author && 
                            <>
                                <RouteTitle title='Trang chủ' />
                                <RouteTitle title='Tác giả' />
                                <RouteTitle title={author.name!} />
                            </>) || 
                        (category && 
                        <>
                            <RouteTitle title='Trang chủ' />
                            <RouteTitle title='Nhà xuất bản' />
                            <RouteTitle title={category.name!} />
                        </>
                        )
                    }
                </ul>  : <div></div>
            }
            <div className="clearfix"></div>          
        </div>
    )
}

export default RouteLine