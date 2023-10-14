import React from 'react'
import DonutChart from './DonutChart'
import './portfolioChart.css'

const portfolioChartCard = ({portfolioChartCard}) => {
    console.log("portfolio Chart ", portfolioChartCard)

  return (
    <div className='portfolioChartCard'>
       <div className='donut_chart_port'>
        
       </div>
       <DonutChart/>
    </div>
  )
}

export default portfolioChartCard