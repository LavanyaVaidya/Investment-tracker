import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Front-end/components/NavBar';
import Learn from './Front-end/components/Learn';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/learn' element={<Learn/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
