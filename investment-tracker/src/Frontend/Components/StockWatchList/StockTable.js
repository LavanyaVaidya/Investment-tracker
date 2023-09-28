import React from "react";


const StockTable = () => {
  return (
    <div className="stock_table">
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-white" id="praject-table">
          <tr>
            <th className="text-center">SYM</th>
            <th className="text-center"> Name</th>
            <th className="text-center">Price</th>
            <th className="text-center">Change(1D)</th>
            <th className="text-center">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center" data-label="S.No">
              1
            </td>
            <td className="text-center"data-label="Project Name">
            Google
            </td>
            <td data-label="Project Locatiom" class="text-center">
              test
            </td>
            <td class="text-center" data-label="Status">
              <span>Active</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
