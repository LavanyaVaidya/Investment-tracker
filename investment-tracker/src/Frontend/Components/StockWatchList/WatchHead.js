import React from 'react'
import './WatchList.css'
import WatchListEc1 from '../Images/WatchListEc1.jpg'
import WatchListEc2 from '../Images/WatchListEc2.png'

const WatchHead = () => {
  return (
    <>
    <div className='watchList_addlist_head'>
       <img src={WatchListEc2} alt='ec2'></img>
       <h1>Watchlists</h1>
       <img src={WatchListEc1} alt='ec1'></img>
     </div>
   <hr/>
  </>
  )
}

export default WatchHead