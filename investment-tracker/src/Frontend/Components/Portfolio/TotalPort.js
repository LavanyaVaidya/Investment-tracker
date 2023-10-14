import React, { useEffect, useState } from 'react'
import './TotalPort.css'

const TotalPort = ({data}) => {
  const[invested, setInvested] = useState(0);
  const[currentPrice, setCurrentPrice] = useState(0); 
  useEffect(()=>{
   
    let invest =0 , current =0 ;  
    
    for(let i = 0; i<data.length;i++){
      invest+= parseFloat(data[i].investedPrice); 
          current+=parseFloat(data[i].price); 

    }
    setCurrentPrice(current); 
    setInvested(invest)
  
  },[data]) 

  return (
    <div className='portfolio_stats'>
        <div className='stats_cols'>
        <div className='label'> Total Investment </div>
            <h1 className='value'>{invested.toFixed(0)}</h1>
            <span className='text_decimal'>{((invested)-Math.floor(invested)).toFixed(2)}</span>
        </div>
        <div className='stats_cols'>
        <div className='label'> Current Value </div>
            <h1 className='value'>{currentPrice.toFixed(0)}</h1>
            <span className='text_decimal'>{((currentPrice)-Math.floor(currentPrice)).toFixed(2)}</span>
        </div>
        <div className='stats_cols'>
        <div className='label'>P&L</div>
            <h1 className='value text_red'>
             <span>
             {(invested-currentPrice).toFixed(0)}
                <span className='text_decimal'>{
                  ((invested-currentPrice)-Math.floor(invested-currentPrice)).toFixed(2)
                }</span>
             </span>
             <br/>
             <span className='text_small'> 
              {(((invested-currentPrice)/invested)*100).toFixed(4)}
              %</span>
             </h1>
        </div>
       
    </div>
  )
}

export default TotalPort