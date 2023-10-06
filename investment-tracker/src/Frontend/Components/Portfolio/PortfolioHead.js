import React from "react";
import "./PortfolioHead.css";
import SearchableDropdown from './SearchableDropdown'
import PortForm from "./PortForm";
import QueueIcon from "@mui/icons-material/Queue";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SearchIcon from "@mui/icons-material/Search";


const PortfolioHead = ({ onAddInput, TotalStocks }) => {
//  -> Price Fetching  
const options = ['MSFT', 'GOOGL', 'GOOG', 'AMAZON'];


  return (
    <div className="portfolio_head">
      <div className="holding_">
        <QueueIcon className="holding_icon" />
         <div className="holding_number">
         <span>Holding</span>
         <span>({TotalStocks})</span>
         </div>
      </div>
      <div className="portfolio_analytics">
        <ShowChartIcon className="port_analytics_icon"/>
        <span> Analytics</span>
      </div>
      <div className="portfolio_search">
        <SearchableDropdown options={options}  className='input'/>
      </div>
      <div >
        <PortForm onAddInput={onAddInput} />
      </div>
    </div>
  );
};

export default PortfolioHead;
