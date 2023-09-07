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

function App() {
  return (
    <div>
      <ProductFullDescription />
      <div className='clearfix'></div>
      <Footer/>
    </div>
  )
}

export default App;
