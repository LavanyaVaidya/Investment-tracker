import React, { useState } from "react";
import "./WatchCategory.css";

const WatchCategory = ({ filteredData, setSearchedCategory, abc }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [filterResult, setFilterResult] = useState([]);

  console.log(filteredData);
  const handleSearch = (e) => {
    const result = filteredData.filter((filteredItem) =>
      filteredItem.sector.startsWith(e.target.value)
    );
    const resultSet = new Set(result.map((resultItem) => resultItem.sector));
    setFilterResult([...resultSet]);
  };

  return (
    <div className="watchList_category">
      <div className="stock_category">
        <h2>{abc ? abc : "All Category"}</h2>
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
                onChange={handleSearch}
                // value={search}
                class="add_input form-control mb-4 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
            </form>
          )}
        </div>
        <ul>
          {filterResult.map((filterItem) => (
            <li
              onClick={(e) => setSearchedCategory(e.target.innerText)}
              key={Math.random()}
            >
              {filterItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WatchCategory;