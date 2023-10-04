import React from 'react'
import Welcome from './Welcome'
import {useParams} from 'react-router-dom'
import NavbarLogin from './NavbarLogin/NavbarLogin'
import {useState, useRef, useEffect} from 'react'
import AppLayout from './Side-bar/layout/AppLayout'

const Home2 = () => {
  const [isAppLayoutVisible,setAppLayoutVisible]=useState(false);
  const appLayoutRef=useRef(null);
  const toggleAppLayout=()=>{
    setAppLayoutVisible(!isAppLayoutVisible);
  }
  useEffect(()=>
  {
      const handleClickOutside=(event)=>{
        if(appLayoutRef.current && !appLayoutRef.current.contains(event.target))
        {
          setAppLayoutVisible(false);
        }
      };
      document.addEventListener('mousedown',handleClickOutside);
      return()=>
      {
        document.removeEventListener('mousedown',handleClickOutside);
      };
  },[]);
  const { user } = useParams();

  const navHeading='Welcome' +user+ ' !'
  return (
    <div>
      <NavbarLogin heading={navHeading}/>
      <h2> Hello guys</h2>
        <Welcome></Welcome>
      <button className='toggle button' onClick={toggleAppLayout}>Click Me</button>
      {isAppLayoutVisible && <div ref={appLayoutRef}><AppLayout/></div>}
    </div>
  );
}

export default Home2;
