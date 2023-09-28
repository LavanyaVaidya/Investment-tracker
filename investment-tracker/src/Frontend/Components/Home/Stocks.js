import React from "react";
import mainwatchlist from "../Images/mainwatchlist.jpg";
import mainOrders from '../Images/MainOrders.jpg'
import mainPortfolio from '../Images/mainPortfolio.jpg'
import mainTools from '../Images/mainTools.jpg'
import { Link } from "react-router-dom";
import "./Stocks.css";

const Stocks = () => {
  return (
    <div className="home_stocks_container">
      <h1>Features in Portfolio Watcher </h1>

      <div className="home_stocks">
      <Link to="/watchlist"> 
        <div className="home_stocks_watchlist">
          <img src={mainwatchlist} alt="watchlist"></img>
            <h2>WatchList</h2>
        </div>
        </Link>

        <div className="home_stocks_Orders">
          <img src={mainOrders} alt="orders"></img>
          <h2>Orders</h2>
        </div>
        <Link to="/portfolio"> 
        <div>
          <img src={mainPortfolio} alt="portfolio"></img>
          <h2>Portfolio</h2>
        </div> </Link>

        <div>
          <img src={mainTools} alt="Tools"></img>
          <h2>Tools </h2>
        </div>

      </div>
    </div>
  );
};

export default Stocks;
