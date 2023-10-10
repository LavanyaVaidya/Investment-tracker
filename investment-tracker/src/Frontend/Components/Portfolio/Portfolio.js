import React, { useEffect, useState } from "react";
import PortItems from "./PortItems";
import TotalPort from "./TotalPort";
import PortfolioHead from "./PortfolioHead";
import NavbarLogin from "../../Components2/NavbarLogin/NavbarLogin";

import './Portfolio.css'


const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    getPortfolioData();
  }, []);

  const getPortfolioData = async () => {
    try {
      const response = await fetch("http://localhost:8085/portfolio/total");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
     
      setPortfolioData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onAddInput = async (data) => {

    data.id = null; 
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const response = await fetch("http://localhost:8085/portfolio/data", options);
    getPortfolioData(); 
    const result = await response.json();
    return result;
  };
  
  const onDelete = async (stocksym) => {
  
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `http://localhost:8085/portfolio/data/${stocksym}`,
      options
    );
    if (!response.ok) {
      alert("network Error ");
    }
    getPortfolioData(); 
  }
  

  return (
    <div className="portfolio">
      <NavbarLogin/>
      <TotalPort data = {portfolioData} />
      <PortfolioHead onAddInput={onAddInput} TotalStocks={portfolioData.length} />
      <PortItems holdingData={portfolioData} onDelete={onDelete} />
    </div>
  );
};

export default Portfolio;
