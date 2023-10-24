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
import { AppContextProvider, rootStore } from './stores/RootStore.store';
import RegisterBox from './components/templates/RegisterBox';

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
          <Route path='/checkout' element={<DetailsCart/>}/>
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
