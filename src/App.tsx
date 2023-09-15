import './App.css';
import ProductFullDescription from './components/templates/ProductFullDescription';
import ProductMainInfo from './components/collections/ProductMainInfo';
import RouteLine from './components/collections/RouteLine';
import AuthorBox from './components/elements/AuthorBox';
import ProductFullDetails from './components/elements/ProductFullDetails';
import ProductImage from './components/elements/ProductImage';
import ProductInfo from './components/elements/ProductInfo';
import ProductPropRight from './components/elements/ProductProps';
import ProductTab from './components/elements/ProductTab';
import RouteTitle from './components/elements/RouteTitle';
import Footer from './components/templates/Footer';
import MainboxProduct from './components/collections/MainboxProduct';
import HomePage from './components/pages/HomePage';
import AuthorContent from './components/templates/AuthorContent';
import Logo from './components/elements/Logo';
import CartItem from './components/elements/CartItem';
import CartInfomation from './components/elements/CartInfomation';
import DetailsCart from './components/pages/DetailsCart';
import MiniCartItem from './components/elements/MiniCartItem';
import HomeCart from './components/collections/HomeCart';
import BottomHeader from './components/templates/BottomHeader';

function App() {
  return (
    <div className=''>
      <ProductFullDescription />
      
      {/* <CartItem id='123' title='Sapiens Lược Sử Loài Người' amount={1} price={254000}/> */}
      {/* // <CartInfomation /> */}
    </div>
    // <div>
    //   <ProductFullDescription />
    //   <div className='clearfix'></div>
    //   <Footer/>
    // </div>
  )
}

export default App;
