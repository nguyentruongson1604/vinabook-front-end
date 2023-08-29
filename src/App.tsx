
import './App.css';
import Nav from './components/templates/Nav';
import Banner from './components/templates/Banner';
import TopHeader from './components/templates/TopHeader';
import BottomHeader from './components/templates/BottomHeader';
import FamousAuthor from './components/collections/FamousAuthor';
import AuthorContent from './components/templates/AuthorContent';
function App() {
  return (
    <>
      <TopHeader/>
      <BottomHeader/>
      <Nav appear={true}/>
      <Banner/>
      {/* <AuthorContent/> */}
      {/* <FamousAuthor/>  */}
    </>

  )
}

export default App;
