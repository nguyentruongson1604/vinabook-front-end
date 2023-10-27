import { observer } from 'mobx-react'
import AuthorBox from '../../elements/AuthorBox'
import style from './style.module.css'
import { IBook } from '../../../stores/childrens/Books.store'

const MainboxProduct = observer(({book}: {book: IBook | undefined}) => {
    return(
        <div className={style.mainBoxProduct} id='intro'>
            {
                book ?
                <>
                    <h3 className={style.title}>
                        {book.name}				
                    </h3>
                    <div className={style.mainBox}>
                        <div className={style.fullDescription}>
                            <div className={style.authorBox}>
                                <AuthorBox author={book.author}/>
                            </div>
                            <div className={style.content}>
                                <p>
                                    {book.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </> : <div></div>
            }
        </div>
    )
})

export default MainboxProduct