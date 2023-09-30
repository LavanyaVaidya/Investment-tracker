import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import NavBar from './Frontend/Components/Navbar/NavBar';
import Learn from './Frontend/Components/Learn/Learn';
import Home from './Frontend/Components/Home/Home';
import Footer from './Frontend/Components/Footer/Footer';
import Pricing from './Frontend/Components/Pricing/Pricing.js';
import Support from './Frontend/Components/Support/Support';
import SignInUp from './Frontend/Components/Login-Register/SignInUp';
import PrivateRoute from './Frontend/Components2/PrivateRoute';
import Home2 from './Frontend/Components2/Home2';
import Navigate from 'react-router-dom'

// const PrivateRouteComponent = ({ element, isLoggedIn }) => {
//   return isLoggedIn ? element : <Navigate to="/signup" />;
// };

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<SignInUp />} />
        <Route path="/welcome/*" element={<Home2/>}/>
        {/* <Route
          path="/welcome"
          element={<PrivateRouteComponent element={<Home2 />} isLoggedIn={isLoggedIn} />}
        /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
