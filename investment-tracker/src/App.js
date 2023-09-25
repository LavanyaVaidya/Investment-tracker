import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Frontend/Components/Navbar/NavBar';
import Learn from './Frontend/Components/Learn/Learn';
import Home from './Frontend/Components/Home/Home';
import Footer from './Frontend/Components/Footer/Footer';
import Pricing from './Frontend/Components/Pricing/Pricing.js';
import Support from './Frontend/Components/Support/Support';
import SignInUp from './Frontend/Components/Login-Register/SignInUp';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/signup' element={<SignInUp />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
      
  );
}

export default App;
