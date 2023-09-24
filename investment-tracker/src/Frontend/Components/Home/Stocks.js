import React from "react";
import watchlist from "../Images/watchlist.jpg";
import Orders from "../Images/coins.png";
import "./Stocks.css";

const Stocks = () => {
  return (
    <div className="home_stocks_container">
      <h1>Features in Portfolio Watcher </h1>

      <div className="home_stocks">
        
        <div className="home_stocks_watchlist">
          <img src={watchlist} alt="watchlist"></img>
         
            <h2>WatchList</h2>
      
        </div>

        <div className="home_stocks_Orders">
          <img src={watchlist} alt="watchlist"></img>
          <h2>Orders</h2>
        </div>

        <div>
          <img src={watchlist} alt="watchlist"></img>
          <h2>Portfolio</h2>
        </div>

        <div>
          <img src={watchlist} alt="watchlist"></img>
          <h2>Tools </h2>
        </div>

      </div>
    </div>
  );
};

export default Stocks;
