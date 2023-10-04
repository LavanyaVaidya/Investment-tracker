import React from 'react'
import './PortItems.css'

const PortItems = ({holdingData}) => {
    
    console.log(holdingData)

  return (
    <div className='port_items'>
     <table>
        <thead>
            <tr>
                <th className='instrument right-border sortable'>
                    <span>Instrument</span>
                 </th>
                <th className='quantity right sortable'>
                    <span>Qty</span>
                </th>
                <th className='invested_price right sortable'>
                    <span>Invested</span>
                </th>
                <th className='current_price right-border sortable'>
                    <span>Price</span>
                </th>
                <th className='total_value right sortable'>
                    <span>Total Price</span>
                </th>
                <th className='net_change_percent right sortable'>
                    <span>%Change</span>
                </th>
            </tr>
        </thead>
        <tbody>
           {holdingData>0 &&
           holdingData.map((stockItem)=>{
            <tr>
            <td className='instrument right-border'> 
                <span>{stockItem.symbol}</span>
            </td>
            <td className='right qty'>
                <span>{stockItem.qty}</span>
            </td>
            <td className='right'>
                <span>{stockItem.invested}</span>
            </td>
            <td className='right-border'>
                <span>{stockItem.price}</span>
            </td>
            <td className='right'>
                <span>{stockItem.price*stockItem.qty}</span>
            </td>
            <td className='right'>
                <span>{
                    (((stockItem.price-stockItem.invested)/stockItem.invested)*100)
                    }%</span>
            </td>
        </tr>
           })}
        </tbody>
     </table>
    </div>
  )
}

export default PortItems