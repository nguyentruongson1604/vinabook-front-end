import './App.css';
import LeftContent from './components/collections/LeftContent';
import RouteLine from './components/collections/RouteLine';
import FormLogin from './components/elements/FormLogin';
import FormRegister from './components/elements/FormRegister';
import PayForm from './components/elements/PayForm';
import AuthorPage from './components/pages/AuthorPage';
import CategoryPage from './components/pages/CategoryPage';
import DetailsCart from './components/pages/DetailsCart';
import DetailsPage from './components/pages/DetailsPage';
import Header from './components/pages/Header';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import AuthorContent from './components/templates/AuthorContent';
import BottomHeader from './components/templates/BottomHeader';
import Footer from './components/templates/Footer';
import LoginBox from './components/templates/LoginBox';
import Nav from './components/templates/Nav';
import ProductFullDescription from './components/templates/ProductFullDescription';
import RegisterBox from './components/templates/RegisterBox';
import TopHeader from './components/templates/TopHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/checkout' element={<DetailsCart/>}/>
        {/* <Route path='/author/:authorId' element={<AuthorPage/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
