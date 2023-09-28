import React, { useState } from "react";
import "./WatchCategory.css";

const WatchCategory = () => {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div className="watchList_category">

        <div className="stock_category">
        <h2>Category</h2>
        </div>

{/*  Button And Input  */}
       <div className="category_buttonInput">
         
      <div className="add_stocks_btn">
        <button
          onClick={() => setDisplayForm(!displayForm)}
          className="stock_create "
        >
          {displayForm ? "Close" : "Create"}
        </button>
      </div>

      <div className="add_stock_input">
        {displayForm && (
          <form>
            <input
              type="search"
              // onChange={handleSearch}
              // value={search}
              class="add_input form-control mb-4 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />
          </form>
        )}
      </div>
       </div>
    </div>
  );
};

export default WatchCategory;
