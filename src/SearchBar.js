import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={sortBy === sortByOptionValue ? styles.active : ""}
          onClick={() => setSortBy(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`);
    // Simulated search functionality can be added here
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.searchBarFields}>
        <input
          placeholder="Search Business"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className={styles.searchBarSubmit}>
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
