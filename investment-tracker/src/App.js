import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Front-end/components/NavBar';
import Learn from './Front-end/components/Learn';
import Home from './Frontend/Components/Home/Home';
import Footer from './Frontend/Components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learn' element={<Learn/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
  );
}

export default App;
