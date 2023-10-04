import React from 'react'
import './TotalPort.css'

const TotalPort = ({investedPrice, currentPrice}) => {

  return (
    <div className='portfolio_stats'>
        <div className='stats_cols'>
        <div className='label'> Total Investment </div>
            <h1 className='value'>{investedPrice} 78</h1>
            <span className='text_decimal'>.85</span>
        </div>
        <div className='stats_cols'>
        <div className='label'> Current Value </div>
            <h1 className='value'>{currentPrice}97</h1>
            <span className='text_decimal'>.85</span>
        </div>
        <div className='stats_cols'>
        <div className='label'>P&L</div>
            <h1 className='value text_red'>2
             <span>
             {(investedPrice-currentPrice)}
                <span className='text_decimal'>.32</span>
             </span>
             <br/>
             <span className='text_small'>  {(((investedPrice-currentPrice)/investedPrice)*100)}%</span>
             </h1>
        </div>
       
    </div>
  )
}

export default TotalPort