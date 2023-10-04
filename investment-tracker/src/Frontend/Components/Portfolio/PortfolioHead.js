import React from "react";
import "./PortfolioHead.css";
import PortForm from "./PortForm";
// import ShowChartIcon from '@mui/icons-material/ShowChart';

const PortfolioHead = ({ onAddInput, TotalStocks }) => {
  return (
    <div className="portfolio_head">
      <div className="holding_">
        {/* Holdings Icon */}
        <span>Holding</span>
        <span>({TotalStocks})</span>
      </div>
      <div className="portfolio_analytics">
        <span> {/* <ShowChartIcon/> */}c </span>
        <button> Analytics</button>
      </div>
      <div className="portfolio_search">
           {/* <SearchIcon/> */}
        <input type="text" />
      </div>
      <div className="portfolio_form">
        <PortForm onAddInput={onAddInput} />
      </div>
    </div>
  );
};

export default PortfolioHead;
