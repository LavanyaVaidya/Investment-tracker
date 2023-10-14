import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';
import './portfolioChart.css'



const DonutChart = ({portfolioData}) => {

    console.log("Portfolio Data ", portfolioData)
   

    

  return (
  
            <div className='donut_chart'>        
           
            <Chart 
            type="donut"
            width={600}
            height={ 550}
            series={[89 , 78 , 12 , 21, 90]}

            options={{
             labels:['USA','china','amer','ramta' ,'jogi'],
             title:{
                text:"",
               // align:"center",
             },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:false,
             }

            }}
            
            />

            </div>
      
  )
}


export default DonutChart
