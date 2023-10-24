import { IAuthor } from '../../../APIs/author.api'
import { ICategory } from '../../../APIs/category.api'
import { IPublisher } from '../../../APIs/publisher.api'
import { IBook } from '../../../stores/childrens/Books.store'
import RouteTitle from '../../elements/RouteTitle'
import styles from './style.module.css'

const RouteLine: React.FC<{className?: string, book?: IBook, author?: IAuthor, category?: ICategory, publisher?: IPublisher}> = ({ className, book, author, category, publisher}) => {
    // console.log('publisher', publisher?.name)s
    return(
        <div className={className}>
            {
                (book || author || category || publisher) ? 
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
                            <RouteTitle title='Thể loại' />
                            <RouteTitle title={category.name!} />
                        </>
                        ) ||
                        (publisher && 
                        <>
                            <RouteTitle title='Trang chủ' />
                            <RouteTitle title='Nhà xuất bản' />
                            <RouteTitle title={publisher!.name!} />
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