import React, { useState } from "react";
import "./WatchCategory.css";

const WatchCategory = ({ filteredData, setSearchedCategory, allcategory }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [filterResult, setFilterResult] = useState([]);
 
  const handleSearch = (e) => {
    const result = filteredData?.filter((filteredItem) =>
      filteredItem.category.startsWith(e.target.value)
    );
    const resultSet = new Set(result.map((resultItem) => resultItem.category));
    setFilterResult([...resultSet]);
  };

  console.log("result set ", filterResult)

  return (
    <div className="watchList_category">
      <div className="stock_category">
        <h2>{allcategory ? allcategory : "All Category"}</h2>
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
              <input
                type="search"
                onChange={handleSearch}
                class="add_input form-control mb-4 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
          )}
        </div>
        <ul className="category_stocks_items">
          {displayForm? filterResult?.map((filterItem) => (
            <li 
              onClick={(e) => setSearchedCategory(e.target.innerText)}
              key={Math.random()}
            >
              {filterItem}
            </li>
          )):''}
        </ul>
      </div>
    </div>
  );
};

export default WatchCategory;
