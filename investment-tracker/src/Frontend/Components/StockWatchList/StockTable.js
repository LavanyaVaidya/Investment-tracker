import React from "react";


const StockTable = ({watchlistData}) => {
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
          </tr>
        </thead>
        <tbody>
        {watchlistData?.length > 0 &&
            watchlistData.map((item, index) => (
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
                  {item.exchangeShortName}
                </td>
                <td className="text-center" data-label="Category">
                  {item.sector}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;