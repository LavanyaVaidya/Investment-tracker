import React, { useEffect, useState } from "react";
import "./PortItems.css";

const PortItems = (props) => {
  const [holdingData, setHoldingData] = useState([]);

  useEffect(() => {
    setHoldingData(props.holdingData);
  }, [props.holdingData]);

  return (
    <div className="port_items">
      <table>
        <thead>
          <tr>
            <th className="instrument right-border sortable">
              <span>Instrument</span>
            </th>
            <th className="quantity right sortable">
              <span>Qty</span>
            </th>
            <th className="invested_price right sortable">
              <span>Invested</span>
            </th>
            <th className="current_price right-border sortable">
              <span>Price</span>
            </th>
            <th className="total_value right sortable">
              <span>Total Price</span>
            </th>
            <th className="net_change_percent right sortable">
              <span>%Change</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {holdingData?.length > 0 &&
            holdingData?.map((stockItem) => {
              return (
                <>
                  <tr key={stockItem.symbol}>
                    <td className="instrument right-border">
                      <span>{stockItem.symbol}</span>
                    </td>
                    <td className="right_items qty">
                      <span>{stockItem.Quantity}</span>
                    </td>
                    <td className="right_items">
                      <span>{stockItem.investedPrice}</span>
                    </td>
                    <td className="right-border">
                      <span>{stockItem.price}</span>
                    </td>
                    <td className="right_items">
                      <span>{stockItem.price * stockItem.Quantity}</span>
                    </td>
                    <td className="right_items">
                      <span>
                        {(
                          ((stockItem.price - stockItem.investedPrice) /
                            stockItem.investedPrice) *
                          100
                        ).toFixed(2)}
                        %
                      </span>
                    </td>
                  </tr>
                </>
              );
              // }
            })}
          {/* {holdingData.length>0 && holdingData.map((stockItem) => {
          if(stockItem?.price?.length)
          return 
           
        })
          } */}
        </tbody>
      </table>
    </div>
  );
};

export default PortItems;
