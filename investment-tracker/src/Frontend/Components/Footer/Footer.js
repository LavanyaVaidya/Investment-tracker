import React from 'react'
import './Footer.css'

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


const Footer = () => {
  return (
    <footer>
    <div className='footer'>
     
      <div className='card Privacy'>
        {/* icon , Heading , paragraph button 
         */}
         {<SecurityIcon/>}
         <h2>Privacy</h2>
         <p>lorem ajsdhyu aiusd 
          ausdi asg akjsdi aiusd 
         </p>
         <button className='btn'>More</button>
      </div>

      <div className=' card Target'>
        {<TrackChangesIcon/>}
      <h2>Target</h2>
         <p>lorem ajsdhyu aiusd 
          ausdi asg akjsdi aiusd 
         </p>
         <button className='btn'>More</button>
      </div>

      <div className='card  ContactUs '>
        {<ContactMailIcon/>}
      <h2>ContactUs</h2>
         <p>lorem ajsdhyu aiusd 
          ausdi asg akjsdi aiusd 
         </p>
         <button className='btn'>More</button>
      </div>

      <div className='card FeedBack'>
       { <FeedbackIcon/>}
         <h2>FeedBack</h2>
         <p>lorem ajsdhyu aiusd 
          ausdi asg akjsdi aiusd 
          ashdiuy aiu adiu aisu aisu 
          asdg aiue q eqwe oiwueu7 e9
          zyi uduy qiwue qiwy qwueyt quwte 
          ashd auye qweui qeqye qwey 
          lorem ajsdhyu aiusd 
          ausdi asg akjsdi aiusd 
          ashdiuy aiu adiu aisu aisu 
          asdg aiue q eqwe oiwueu7 e9
          zyi uduy qiwue qiwy qwueyt quwte 
          ashd auye qweui qeqye qwey 
         </p>
         <button className='btn'>More</button>
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