import React from 'react'
import {useState} from 'react';
import './Footer.css'
import MyModal from './Modal';

import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SecurityIcon from '@mui/icons-material/Security';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FeedbackIcon from '@mui/icons-material/Feedback';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-router-dom'

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleButtonClick = () => {
    // Navigate to the specified URL
    window.location.href = 'https://www.natwest.com/';
  };

  return (
    <footer>
    <div className='footer'>
     
      <div className='card-footer Privacy'>
        {/* icon , Heading , paragraph button 
         */}
         {<SecurityIcon/>}
         <h2>Privacy</h2>
         <p>Your data is safe with us. Know how we use your data. Click to read
          privacy policy.
         </p>
         <button className='btn-footer' onClick={handleShowModal}>More</button>
         <MyModal showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>

      <div className=' card-footer Target'>
        {<TrackChangesIcon/>}
      <h2>Sponsered By</h2>
         <p><h2>Natwest</h2>
         </p>
         <button className='btn-footer' onClick={handleButtonClick}>More</button>
      </div>

      <div className='card-footer ContactUs '>
        {<ContactMailIcon/>}
      <h2>ContactUs</h2>
         <p> If you have any questions, please don't hesitate to contact us. 
         </p>
         <Link to='/support'><button className='btn-footer'>More</button></Link>
      </div>

      <div className='card-footer FeedBack'>
       { <FeedbackIcon/>}
         <h2>FeedBack</h2>
         <p>Have a question ? Ask our experts. We would love to solve any query and
          would love to hear any feedback you have.
         </p>
         <Link to="/support"><button className='btn-footer'>More</button></Link>
      </div>

    </div>
    <div className='footer_social_media'>
        <h3> Social media </h3>
    <hr></hr>
    <div className='social_media'>
       <span><FacebookIcon/></span>
       <span>  <InstagramIcon/></span>
       <span> <TwitterIcon/></span>
       <span><WhatsAppIcon/></span>
       <span> <LinkedInIcon/></span>
       <span><YouTubeIcon/></span>
       <span><TelegramIcon/></span>
     </div>
    </div>
    </footer>
  )
}

export default Footer