import React, { useEffect, useState } from "react";
import PortItems from "./PortItems";
import TotalPort from "./TotalPort";
import PortfolioHead from "./PortfolioHead";
import NavBar from "../Navbar/NavBar";

const apikey = "?apikey=77f4427f83aa6fc8cb2033ca7f3d873d";
const Base_Url = "https://financialmodelingprep.com/api/v3/quote-short/";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState({});
  const [holdingData, setHoldingData] = useState([]);
  const [investedPrice, setInvestedPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const [loading, setLoading] = useState(true);

  // useEffect(()=>{

  //   const getPortfoliolist = async()=>{
  //    const data = await getPortfolioData();
  //    setPortfolioData(data);
  //   };

  //   const getPortfolioListPrice = async()=>{
  //     let temp = [];
  //     for(let item in portfolioData)
  //     {
  //       const data =await getSymbolPrice(portfolioData[item].symbol)
  //        console.log("fetch data: ", data);
  //        temp.push(data[0]);

  //       // Task - add the two objects - I have to see what form data is coming
  //      setHoldingData([...holdingData, data[0]]);

  //       setCurrentPrice(currentPrice+parseFloat(holdingData.price))
  //       setInvestedPrice(investedPrice+parseFloat(holdingData.invested))
  //       // Adding the invested Price and current price
  //     }
  //     console.log(holdingData);
  //     // setHoldingData(temp);
  //     // console.log("data" , holdingData);
  //   }
  //  getPortfoliolist();
  //  getPortfolioListPrice();

  // }, [])

  // // Get call to Portfolio
  // const getPortfolioData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:9000/portfolio');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const jsonData = await response.json();
  //     return jsonData;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setLoading(false)
  //   }
  // };
  // // Get call to Price
  // // $/
  // // 'p'
  // // baseurl/appl
  // const getSymbolPrice = async(symbol) =>{
  //   try {
  //     const response = await fetch(`${Base_Url}${symbol}${apikey}`);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const jsonData = await response.json();
  //     return jsonData;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  //  On Adding into form I am adding to the portfolio db.json
  const onAddInput = async (data) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("http://localhost:9000/portfolio", options);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    async function getPortfolio() {
      let data = await fetch("http://localhost:9000/portfolio");
      data = await data.json();
      console.log("data: ", data);
      let len = data.length || 1;
      let promises = [];
      for (let i = 0; i < len; i++) {
        promises.push(
          (await fetch(`${Base_Url}${data[i]?.symbol}${apikey}`)).json()
        );
      }
      let finalData = await Promise.all(promises);
      let finalAns = [];
      // let investTotal = 0;
      // let currentTotal = 0 ;
      finalData.forEach((doc, index) => {
        console.log({ ...doc[0], ...data[index] });
        // investTotal+= (data[index].invested)
        // currentTotal+= (doc[0].invested)
        finalAns.push({ ...doc[0], ...data[index] });
      });
      // console.log(investTotal);
      // console.log(currentTotal)
      setHoldingData(finalAns);
      // setInvestedPrice(investTotal)
      // setCurrentPrice(currentTotal)
    }
    getPortfolio();
  }, []);

  if (!loading) return false;

  return (
    <div className="portfolio">
      {/* {holdingData.length}; */}
      <NavBar />
      <TotalPort investedPrice={investedPrice} currentPrice={currentPrice} />
      <PortfolioHead onAddInput={onAddInput} TotalStocks={holdingData.length} />
      <PortItems holdingData={holdingData} />
    </div>
  );
};

export default Portfolio;
