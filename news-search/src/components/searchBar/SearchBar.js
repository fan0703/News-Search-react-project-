import React, { useState } from "react";
import "./searchBar.css";
export default function SearchBar(props) {
  const [searchData, setSearchData] = useState({ searchterm: "" });
  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    props.articlesearch(searchData.searchterm);
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={searchData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
