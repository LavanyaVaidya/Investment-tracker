import React, { useEffect, useState } from 'react'
import PortItems from './PortItems'
import TotalPort from './TotalPort'
import PortfolioHead from './PortfolioHead'

  const apikey = '?apikey=';
  // 77f4427f83aa6fc8cb2033ca7f3d873d
  const Base_Url = 'https://financialmodelingprep.com/api/v3/quote-short/'


const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState({}); 
  const [holdingData, setHoldingData] = useState([]); 
  const [investedPrice, setInvestedPrice] = useState(); 
  const [currentPrice , setCurrentPrice] = useState(); 

  const [loading, setLoading] = useState(true);


  
  
  useEffect(()=>{

    const getPortfoliolist = async()=>{
     const data = await getPortfolioData(); 
     setPortfolioData(data); 
    };
    const getPortfolioListPrice = async()=>{
      for(let item in portfolioData)
      {
        const data =await getSymbolPrice(portfolioData[item].symbol)

        // Task - add the two objects - I have to see what form data is coming 
        // setHoldingData([data, ...portfolioData])
        // Adding the invested Price and current price 
        // SetInvedtedprice , currentPrice 
      }
    } 

   getPortfolioListPrice(); 
   getPortfoliolist(); 
  }, [])


  // Get call to Portfolio 
  const getPortfolioData = async () => {
    try {
      const response = await fetch('http://localhost:9000/portfolio'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      return jsonData; 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false)
    }
  };
  // Get call to Price 
  const getSymbolPrice = async(symbol) =>{
    try {
      const response = await fetch(`${Base_Url}${symbol}${apikey}`); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      return jsonData; 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  //  On Adding into form I am adding to the portfolio db.json 
  const onAddInput = async(data)=> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('http://localhost:9000/portfolio',options);
    const result = await response.json();
    return result; 
  }

  if(!loading) return false ; 

  return (
    <div className='portfolio'>
      <TotalPort investedPrice ={investedPrice} currentPrice={currentPrice}/>
      <PortfolioHead onAddInput={onAddInput} TotalStocks={holdingData.length}/>
      <PortItems holdingData = {holdingData}/>
    </div>
  )
}

export default Portfolio