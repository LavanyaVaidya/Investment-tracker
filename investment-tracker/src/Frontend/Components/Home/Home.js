import React, {useState} from 'react'
import './Home.css'
import Main from './Main'

import Stocks from '../../Components2/Stocks/Stocks'
import Education from './Education'
import SignInUp from '../Login-Register/SignInUp'
import { Route, Switch } from 'react-router-dom'
import Home2 from '../../Components2/Home2'
import NavBar from '../Navbar/NavBar'
import Footer from '../Footer/Footer';


const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className='home'>
     
      {isLoggedIn ? (
        <Home2></Home2>
      ) : (
        <>
          <NavBar/>
          <Main />
          {/* <Stocks /> */}
          <Education />
      
          
        </>
      )}
    </div>
  );
}
export default Home;