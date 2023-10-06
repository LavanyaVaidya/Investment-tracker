import React, { useEffect, useState, useRef } from "react";
import "./WatchList.css";

import WatchHead from "./WatchHead";
import WatchCategory from "./WatchCategory";
import WatchStocks from "./WatchStocks";
import NavBar from "../Navbar/NavBar";


const apikey = "&apikey=77f4427f83aa6fc8cb2033ca7f3d873d";
const Base_Url = "https://financialmodelingprep.com/api/v3/stock-screener?";

const WatchList = () => {
  const [symbols, setSymbols] = useState(); 
  // const [allstockData, setAllStocksData] = useState(); // from external API
  const [inScreenerData, setInScreenerData] = useState();
  const [searchedCategory, setSearchedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getWatchListSym = async () => {
      const res = await getWatchListSymbols();
      setSymbols(res);
    };
    getWatchListSym();

    // const getStocksDataList = async()=>{
    //   const res = await getAllStocksData();
    //   setAllStocksData(res);
    // }
    // getStocksDataList();

    const getStockScreenerDataList = async () => {
      const res = await getStockScreenerData();
      setInScreenerData(res);
    };
    getStockScreenerDataList();
  }, []);

  useEffect(() => {
    getDataOnLoad();
  }, [inScreenerData]);

  const intialData = useRef([]);

  useEffect(() => {
    const searchByCategory = () => {
      const filterResult = intialData.current?.filter(
        (inScreenItem) => inScreenItem.sector === searchedCategory
      );
      setFilteredData(filterResult);
    };
    searchByCategory();
  }, [searchedCategory]);

  const getDataOnLoad = () => {
    const filterResult = inScreenerData?.filter((StockItem) => {
      return symbols.find((item) => item.symbol === StockItem.symbol);
    });

    setFilteredData(filterResult);
    intialData.current = filteredData;
    setLoading(false);
  };

  const getStockScreenerData = async () => {
    const response = await fetch("http://localhost:9001/Stocks_Screener_data");
    const result = response.json();
    return result;
  };

  // const getAllStocksData = async(sym) =>{
  //   const response = await fetch(`${Base_Url}${apikey}`);
  //   const result = response.json();
  //   return result;
  // }
  const getWatchListSymbols = async () => {
    const response = await fetch("http://localhost:9001/watchListDb");
    const result = response.json();
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
    const response = await fetch("http://localhost:9001/watchListDb", options);
    const result = await response.json();
    return result;
  };

  if (loading) return;

  return (
    <div className="watchList">
      <NavBar />
      <WatchHead />
      <WatchCategory
        filteredData={intialData.current}
        setSearchedCategory={setSearchedCategory}
        abc={searchedCategory}
      />
      <WatchStocks onAddInput={onAddInputSymbol} watchlistData={filteredData} />
    </div>
  );
};

export default WatchList;

//  Initital Post data
//  if (allstockData?.length > 0) {
//   postAllStocksScreenerData(allstockData)
//   .then((response) => {
//     console.log('Data posted successfully:', response);
//   })
//   .catch((error) => {
//     console.error('Error posting data:', error);
//   });
// }

// const postAllStocksScreenerData = async(allstockData) =>{
//   const options = {
//     method: "POST",
//     body: JSON.stringify(allstockData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const response = await fetch("http://localhost:9001/Stocks_Screener_data", options);
//   const result = await response.json();
//   return result;
// }