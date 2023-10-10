import { Pagination } from '@mui/material';
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
import { AppContextProvider, useStore } from './stores/RootStore.store';

function App() {
  const store = useStore()
  
  return (
    <BrowserRouter>
      <AppContextProvider value={store}>
        <TopHeader/>
        <BottomHeader/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
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
