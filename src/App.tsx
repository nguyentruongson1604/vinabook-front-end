/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import AuthorPage from './components/pages/AuthorPage';
import CategoryPage from './components/pages/CategoryPage';
import DetailsCart from './components/pages/DetailsCart';
import DetailsPage from './components/pages/DetailsPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import BottomHeader from './components/templates/BottomHeader';
import Footer from './components/templates/Footer';
import TopHeader from './components/templates/TopHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContextProvider, rootStore, useStore } from './stores/RootStore.store';
import InfoUserPage from './components/pages/InfoUserPage';
import { useEffect, useState } from 'react';
import PayAdressPage from './components/pages/PayAdressPage';
import AdminPage from './components/pages/AdminPage/Page';
import RegisterBox from './components/templates/RegisterBox';
import CofirmBillPage from './components/pages/CofirmBillPage';
import { AdminRouter, UserRouter } from './Auths/PrivateRouter';
import SuccessNotice from './components/elements/SuccessNotice';
import ListBillPage from './components/pages/ListBillPage';
import Slider from './components/pages/test';
import Slider1 from './components/pages/test';
import BoxInfoBook from './components/collections/BoxInfoBook/Index';

function App() {  
  const images = ["https://kenh14cdn.com/2020/4/30/902457161437121738069051937911925677490176n-15882080571301544789257.jpg","https://kenh14cdn.com/2020/4/30/902457161437121738069051937911925677490176n-15882080571301544789257.jpg", "https://kenh14cdn.com/2020/4/30/902457161437121738069051937911925677490176n-15882080571301544789257.jpg","https://kenh14cdn.com/2020/4/30/902457161437121738069051937911925677490176n-15882080571301544789257.jpg","https://kenh14cdn.com/2020/4/30/902457161437121738069051937911925677490176n-15882080571301544789257.jpg"];
  const store = useStore()
  const [loading, setLoading] = useState(true);
  const checkCurrentUser = async ()=>{  //khi người dùng load lại page sẽ gọi hàm checkCurrentUser
    if(localStorage.getItem('accessToken')){
      await store.userAccess?.getCurrentUser()  
    }
      setLoading(false)
  }
  
  useEffect(()=>{
    checkCurrentUser()
    
  }, [checkCurrentUser])
  if(loading) return <div>Loading...</div>
  return (
    <>
    <BrowserRouter>
      <AppContextProvider value={rootStore}>
        <TopHeader/>
        <BottomHeader/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route element={<UserRouter/>} >
            <Route path='/info' element={<InfoUserPage/>}/>
            <Route path='/adressbill' element={<PayAdressPage/>}/>
            <Route path='/confirmBill' element={<CofirmBillPage/>} />
            <Route path='/listBill' element={<ListBillPage/>} />
          </Route>
          <Route path='/checkout' element={<DetailsCart/>}/>
          <Route path='/author' element={<AuthorPage/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/details' element={<DetailsPage/>}/>
          <Route element={<AdminRouter />} >
            < Route path='/admin/*' element={<AdminPage />}/>
          </Route>
          <Route path='/author/:authorId' element={<AuthorPage/>}/>
          <Route path='/category/:categoryId' element={<CategoryPage/>}/>
          <Route path='/publisher/:publisherId' element={<CategoryPage/>}/>
          <Route path='/search?' element={<CategoryPage/>}/>
          <Route path='/details/:bookId' element={<DetailsPage/>}/>
          <Route path='/noticeSuccess/:billId' element={<SuccessNotice/>} />
          <Route path='/abc/' element={<BoxInfoBook/>} />


        </Routes>
        <Footer/>
      </AppContextProvider>
    </BrowserRouter>
    
    </>
  )
}
export default App;
