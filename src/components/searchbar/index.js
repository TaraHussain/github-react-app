import axios from "axios";
import React, { useState } from "react";
import Results from "../results";
import "./search.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <div>
        <input
          id="searchbar"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
        />
        <button id="button" onClick={handleClick}>
          Search
        </button>
      </div> */}
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Enter username"
            value={searchInput}
            onChange={handleChange}
          />
          <button type="submit" className="searchButton" onClick={handleClick}>
            search
          </button>
        </div>
      </div>

      <Results repos={repos} />
    </>
  );
};

export default SearchBar;
