import React from 'react'
import './Home.css'
import Main from './Main'

import Stocks from './Stocks'
import Education from './Education'

const Home = () => {
  return (
    <div className='home'>
        <Main/>
        <Stocks/>
        <Education/>
    </div>
  )
}

export default Home