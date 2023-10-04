import React, { useState } from "react";
import './PortForm.css'

const PortForm = ({ onAddInput }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [investedPrice, setInvestedPrice] = useState();
  const [Quantity, setQuantity] = useState();
  const [symbol, setSymbol] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    //  Task - Add Number Validations and all -> and also Listed shares will be shown 
    if (!symbol || !Quantity || !investedPrice) {
      alert("Enter a valid input");
      return;
    }

    onAddInput({investedPrice, Quantity, symbol});
    setInvestedPrice("");
    setQuantity("");
    setSymbol("");
  };

  return (
    <div className="portfolio_form">
      <button onClick={() => setDisplayForm(!displayForm)}>
        {" "}
        {displayForm ? "Close" : "AddStock"}
      </button>
      <div className="portfolio_form_div">
      {displayForm && (
        <form
          className="addStock_Portfolio_form "
          onSubmit={submitForm}
        >
          <div className="stock_port_input ">
            <label>InvestedPrice</label>
            <input
              type="text"
              name="t1"
              placeholder="invested Amount"
              value={investedPrice}
              onChange={(e) => setInvestedPrice(e.target.value)}
            />
          </div>
          <div className="stock_port_input ">
            <label> Quantity </label>
            <input
              type="text"
              value={Quantity}
              placeholder="number of shares"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="stock_port_input ">
            <label>Share Symbol </label>
            <input
              type="text"
              value={symbol}
              placeholder="Share Symbol"
              onChange={(e) => setSymbol(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default PortForm;