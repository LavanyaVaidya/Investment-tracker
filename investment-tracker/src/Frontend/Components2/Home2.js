import React from 'react'
import Welcome from './Welcome'
import { useParams } from 'react-router-dom';
import NavbarLogin from './NavbarLogin/NavbarLogin';

const Home2 = () => {
  const {user}=useParams();
  const navHeading='Welcome '+user+' !'
  return (
    <div>
      <NavbarLogin heading={navHeading}/>
      <h2> Hello guys</h2>
        <Welcome></Welcome>
    </div>
  )
}

export default Home2