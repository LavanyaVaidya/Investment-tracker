import React, { useState, useEffect } from "react";
import "./WatchStocks.css";
import StockTable from "./StockTable";

const WatchStocks = ({onAddInput, watchlistData, onDelete}) => {

  const [displayForm, setDisplayForm] = useState(false);
  const [text, setText] = useState(''); 

  useEffect(() => {
    
  }, [text])
  
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!text){
      alert('Enter the Symbol');
    }
    onAddInput(text); 
    setText(''); 
  }

 

  return (
    <div className="watch_Stocks">
      <div className="add_stocks">

        <div className="add_stocks_btn">
          <button
            onClick={() => setDisplayForm(!displayForm)}
            className="stock_create "
          >
            {displayForm ? "Close" : "Add"}
          </button>
        </div>

        <div className="add_stock_input">
          {displayForm && (
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                value={text}
                class="add_input form-control mb-4 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
                onChange={(e) => setText(e.target.value)}
              />
              <button type="submit" 
              >Submit</button>
            </form>
          )}
        </div>
      </div>
      <StockTable  watchlistData = {watchlistData} onDelete = {onDelete}/>
    </div>
  );
};

export default WatchStocks;