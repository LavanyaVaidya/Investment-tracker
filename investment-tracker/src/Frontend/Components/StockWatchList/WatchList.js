import React, { useEffect, useState, useRef } from "react";
import "./WatchList.css";
import WatchHead from "./WatchHead";
import WatchCategory from "./WatchCategory";
import WatchStocks from "./WatchStocks";
import NavbarLogin from "../../Components2/NavbarLogin/NavbarLogin";

const WatchList = () => {
  const [symbols, setSymbols] = useState(); 
  const [inScreenerData, setInScreenerData] = useState();
  const [searchedCategory, setSearchedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
  
    getWatchListSymbols();
    getStockScreenerData();

  }, []);

  useEffect(() => {
    getDataOnLoad();
  }, [inScreenerData]);


  const intialData = useRef([]);

  useEffect(() => {
    const searchByCategory = () => {
      const filterResult = intialData.current?.filter(
        (inScreenItem) => inScreenItem.category === searchedCategory
      );
      setFilteredData(filterResult);
    };
    searchByCategory();
  }, [searchedCategory]);


  const getDataOnLoad = () => {
    setFilteredData(inScreenerData);
    intialData.current = inScreenerData;
    setLoading(false);
  };

  const getStockScreenerData = async () => {
    const response = await fetch("http://localhost:8080/watchlist/data");
    const result = await response.json();
    setInScreenerData(result)
    
    return result;
  };

  const getWatchListSymbols = async () => {
    const response = await fetch("http://localhost:8080/watchlist/symbol");
    const result = await response.json();
    setSymbols(result)
     getStockScreenerData(); 
    return result;
  };

  const onAddInputSymbol = async (symbol) => {
    const options = {
      method: "POST",
      body: JSON.stringify({ symbol: symbol }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("http://localhost:8080/watchlist/symbol", options);
    const result = await response.json();
     getStockScreenerData(); 
    return result;
  };

  const DeleteStock = async (stocksym) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`http://localhost:8080/watchlist/data/${stocksym}`,options);
    if (!response.ok) {
      alert("network Error ");
    }
    getStockScreenerData(); 
  }


  if (loading) return;

  return (
    <div className="watchList">
      <NavbarLogin/>
      <WatchHead />
      <WatchCategory
        filteredData={intialData.current}
        setSearchedCategory={setSearchedCategory}
        allcategory={searchedCategory}
      />
      <hr/>
      <WatchStocks onAddInput={onAddInputSymbol} watchlistData={filteredData} 
      onDelete={DeleteStock}/>
    
      
    </div>
  );
};

export default WatchList;

//  Initital Post data
