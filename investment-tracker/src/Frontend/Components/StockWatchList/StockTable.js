import React, { useEffect, useState } from "react";
import './StockTable.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";



const StockTable = ({watchlistData, onDelete}) => {
  
  const [watchlistStocks, setWatchlistStocks] = useState(); 
  useEffect(() => {
    setWatchlistStocks(watchlistData);
  }, [watchlistData]);

  const handleClick = (stocksym) => {
    onDelete(stocksym)
  };
  return (
    <div className="stock_table">
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-white" id="praject-table">
          <tr>
            <th className="text-center">SYM</th>
            <th className="text-center">Price</th>
            <th className="text-center">Volume</th>
            <th className="text-center">exchange</th>
            <th className="text-center">Category</th>
            <th className="text-center">Analytics</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
        {watchlistStocks?.length > 0 &&
            watchlistStocks?.map((item, index) => (
              <tr key={index}>
                <td className="text-center" data-label="SYM">
                  {item.symbol}
                </td>
                <td className="text-center" data-label="Name">
                  {item.price}
                </td>
                <td className="text-center" data-label="Price">
                  {item.volume}
                </td>
                <td className="text-center" data-label="Change(1D)">
                  {item.exchange}
                </td>
                <td className="text-center" data-label="Category">
                  {item.category}
                </td>
                <td className="text-center" data-label="SYM">
                   <Link to='/candlechart' state={item.symbol} > <BarChartIcon /> </Link>
                </td>
                <td className="text-center delete_stockitem_watchlist"><DeleteIcon
                onClick={() => handleClick(item.symbol)}/></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
