import React from 'react'
import EducationImg from '../Images/home_education.png'
// import EducationButtonLeft  from '../Images/education_buttonleft.svg'
// import EducationButtonRight from '../Images/education_button.png'
import Polygon from '../Images/polygon.png'
import './Education.css'


const Education = () => {
  return (
    <div className='home_education_'>
         <div className='home_education'>
     <img src={EducationImg} alt='educa'></img>
     <div className='home_education_learn'>
     <span>Learning <br/>Opportunity </span>
      <button>Learn</button>
     </div>
    </div>
    </div>
  )
}

export default Education