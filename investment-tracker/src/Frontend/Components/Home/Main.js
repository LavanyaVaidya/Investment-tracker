import React from 'react'
import './Main.css'
import right from '../Images/main_image_right.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (

    <div className='main'>
       <div className='main_content'>
       {/* style={{color:"#5F596E"}} */}
              <h1 >Believe and you can achieve</h1>
              <p className='p' >
               Learn and Manage your stocks with experts guidance 
               <br/> on Portfolio watcher Invest in stocks , derivatives , <br/> mutual funds , and more 
               </p>
              
               <Link to="/signup"> 
          <button className='main_signup_btn'>Sign Up</button>
        </Link> 
           
       </div>
       <div className='main_image'>
           <img src={right} alt='right_img'></img>
       </div>
    </div>

  )
}

export default Main