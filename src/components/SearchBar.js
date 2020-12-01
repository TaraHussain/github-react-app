import Axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await Axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <Results repos={repos} />
    </>
  );
};

export default SearchBar;
