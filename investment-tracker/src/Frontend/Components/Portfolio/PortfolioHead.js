import React from "react";
import "./PortfolioHead.css";
import PortForm from "./PortForm";
import QueueIcon from "@mui/icons-material/Queue";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SearchIcon from "@mui/icons-material/Search";

const PortfolioHead = ({ onAddInput, TotalStocks }) => {
  return (
    <div className="portfolio_head">
      <div className="holding_">
        <QueueIcon />
        <span>Holding</span>
        <span>({TotalStocks})</span>
      </div>
      <div className="portfolio_analytics">
        <ShowChartIcon />
        <button> Analytics</button>
      </div>
      <div className="portfolio_search">
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="portfolio_form">
        <PortForm onAddInput={onAddInput} />
      </div>
    </div>
  );
};

export default PortfolioHead;
