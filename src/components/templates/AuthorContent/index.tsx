import styles from './style.module.css';
import AuthorMore from '../../elements/AuthorMore';
import LeftContent from '../../collections/LeftContent';
import DetailTittle from '../../elements/DetailTittle';
import SortContainer from '../../elements/SortContainer';
import ProductContainer from '../../collections/ProductContainer';
import RouteLine from '../../collections/RouteLine';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/RootStore.store';
import { IBook } from '../../../stores/childrens/Books.store';

const AuthorContent = observer(() => {
    const store = useStore()
    const listBook = store.BooksStore?.getBooks
    return (
          <div className={styles.authorContent}>
              <div className="container">
                  {
                    listBook && <RouteLine author={listBook[0]!.author}/>
                  }
                  <div className="clearfix"></div>
                  <div className={styles.styleLeft}>
                      <LeftContent/>
                  </div>
                  <div className={styles.styleRight}>
                      {/* <AuthorMore className={styles.authorMore}/> */}
                      <div className={styles.categoryProduct}>
                          {
                            listBook && 
                            <>
                                <DetailTittle tittle={`Sách của tác giả ${listBook[0].author.name}`}/>
                                <div className={styles.paginationContainer}>
                                    <SortContainer/>
                                    {
                                        listBook.map((book: IBook) => {
                                            return <ProductContainer key={book._id} book={book}/>
                                        })
                                    }
                                </div>
                            </>
                          }
                      </div>
                  </div>
              </div>
          </div>   
    )
  })

export default AuthorContent;