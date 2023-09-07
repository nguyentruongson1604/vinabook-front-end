import './App.css';
import HomePage from './components/pages/HomePage';
import AuthorContent from './components/templates/AuthorContent';
import BottomHeader from './components/templates/BottomHeader';
import Nav from './components/templates/Nav';
import TopHeader from './components/templates/TopHeader';
function App() {
  return (
    <>
    <TopHeader/>
    <BottomHeader/>
    <Nav/>
      <AuthorContent/>
      
    </>
  )
}

export default App;
