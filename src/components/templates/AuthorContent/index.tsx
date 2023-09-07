import styles from './style.module.css';
import AuthorMore from '../../elements/AuthorMore';
import BreadCrumbs from '../../elements/BreadCrumbs';
import LeftContent from '../../collections/LeftContent';
import DetailTittle from '../../elements/DetailTittle';
import SortContainer from '../../elements/SortContainer';
import ProductContainer from '../../collections/ProductContainer';
const AuthorContent =() => {
  return (
        <div className={styles.authorContent}>
            <div className="container">
                <BreadCrumbs/>
                <div className={styles.styleLeft}>
                    <LeftContent/>
                </div>
                <div className={styles.styleRight}>
                    <AuthorMore className={styles.authorMore}/>
                    <div className={styles.categoryProduct}>
                        <DetailTittle tittle={'Sách của tác giả Nguyên Phong'}/>
                        <div className={styles.paginationContainer}>
                            <SortContainer/>
                            <ProductContainer/>  
                            <ProductContainer/>  
                            <ProductContainer/>  

                            <ProductContainer/>  
                                       

                        </div>
                    </div>
                </div>
            </div>
        </div>   
  )
}

export default AuthorContent;