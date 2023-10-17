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
          {/* <Route path='*' element={<div>Page not found</div>}></Route>   */}
        </Routes>
        <Footer/>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App;
