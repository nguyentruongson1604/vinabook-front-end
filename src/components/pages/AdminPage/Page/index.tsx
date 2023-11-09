import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header';
import SlideBar from '../SlideBar';
import styles from './style.module.css'
import UserContent from '../UerContent';
import PublishContent from '../PublisherContent';
import CategoryContent from '../CategoryContent';
import AuthorContent from '../AuthorContent';
import CheckoutContent from '../CheckoutContent';
import BillContent from '../BillContent';
import BookContent from '../BookContent';
import BillForm from '../BillForm';
// import CartContent from '../CartContent';
const AdminPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.main}>
                <div className={styles.slideBar}>
                    <SlideBar/>
                </div>
                <div className={styles.content}>
                <Routes>
                    <Route path='/user' element={<UserContent/>}/>
                    <Route path='/publisher' element={<PublishContent/>}/>
                    <Route path='/category' element={<CategoryContent/>}/>
                    <Route path='/author' element={<AuthorContent/>}/>
                    <Route path='/checkout' element={<CheckoutContent/>}/>
                    <Route path='/bill' element={<BillContent/>}/>
                    <Route path='/bill/*' element={<BillForm/>}/>
                    {/* <Route path='/bill/:billId' element={<BookContent/>}/> */}
                    <Route path='/book' element={<BookContent/>}/>
                    {/* <Route path='/cart' element={<CartContent/>}/> */}
                </Routes>
                </div>
            </div>
        </>
    )
};
  
export default AdminPage