import React, { useState } from "react";
import "./SearchableDropdown.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchableDropdown({ options }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  // Update the filtered options whenever the search term changes
  React.useEffect(() => {
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [options, searchTerm]);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setSearchTerm(option);
  }

  return (
    <div className="searchable_dropdown">
      
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul className="searchable_dropdown_list">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchableDropdown;
