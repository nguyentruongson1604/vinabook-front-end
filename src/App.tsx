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
import { useEffect, useCallback } from 'react';

import PayPage from './components/pages/PayAdressPage';
import PayAdressPage from './components/pages/PayAdressPage';
import AdminPage from './components/pages/AdminPage/Page';

function App() {  
  const store = useStore()
  const checkCurrentUser = useCallback(async ()=>{  //khi người dùng load lại page sẽ gọi hàm checkCurrentUser
    try{      
      await store.userAccess?.getCurrentUser()      
    } catch(error){
      console.log(error);
    }
  },[])
  useEffect(()=>{
    checkCurrentUser()  
  }, [checkCurrentUser])

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider value={rootStore}>
        <TopHeader/>
        <BottomHeader/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/info' element={<InfoUserPage/>}/>
          <Route path='/checkout' element={<DetailsCart/>}/>
          <Route path='/author' element={<AuthorPage/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/details' element={<DetailsPage/>}/>
          <Route path='/adressbill' element={<PayAdressPage/>}/>
          <Route path='/admin/*' element={<AdminPage/>} />
          {/* <Route path='/admin/user' element={<AdminPage/>}/> */}
          <Route path='/author/:authorId' element={<AuthorPage/>}/>
          <Route path='/category/:categoryId' element={<CategoryPage/>}/>
          <Route path='/publisher/:publisherId' element={<CategoryPage/>}/>
          <Route path='/search?' element={<CategoryPage/>}/>
          <Route path='/details/:bookId' element={<DetailsPage/>}/>
          <Route path='/pay' element={<RegisterBox/>}/>
          {/* <Route path='*' element={<div>Page not found</div>}></Route>   */}
        </Routes>
        <Footer/>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App;
