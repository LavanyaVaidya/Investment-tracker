import React, { useEffect, useState } from "react";
import PortItems from "./PortItems";
import TotalPort from "./TotalPort";
import PortfolioHead from "./PortfolioHead";
import NavBar from "../Navbar/NavBar";
import './Portfolio.css'

// const apikey = "?apikey=77f4427f83aa6fc8cb2033ca7f3d873d";
// const Base_Url = "https://financialmodelingprep.com/api/v3/quote-short/";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState({});
  const [holdingData, setHoldingData] = useState([]);
  const [investedPrice, setInvestedPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);




  useEffect(() => {
    const getPortfolioList = async () => {
      const data = await getPortfolioData();
      setPortfolioData(data);
    };

    getPortfolioList();

    // const getHoldings = async () => {
    //   for (let item of portfolioData) {
    //     // Task - Get The item.symbol Current price
    //     // Task - to sum up the total invested Price
    //     // Task - combine the object of PortfolioData and CurrentPrice 

    //     // const data = await getSymbolPrice(item.symbol)
    //     // console.log(data)

    //   }
    // };

    // getHoldings();

  }, []);


  const getPortfolioData = async () => {
    try {
      const response = await fetch("http://localhost:9000/portfolio");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const getSymbolPrice = async (symbol) => {
  //   try {
  //     const response = await fetch(`${}${symbol}`);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const jsonData = await response.json();
  //     return jsonData;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

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

  return (
    <div className="portfolio">
      <NavBar />
      <TotalPort investedPrice={investedPrice} currentPrice={currentPrice} />
      <PortfolioHead onAddInput={onAddInput} TotalStocks={portfolioData.length} />
      <PortItems holdingData={portfolioData} />
    </div>
  );
};

export default Portfolio;
