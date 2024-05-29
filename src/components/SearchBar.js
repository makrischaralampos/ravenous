import React, { useState } from "react";
import Yelp from "../utils/Yelp";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const getSortByClass = (option) => {
    return sortBy === option ? "active" : "";
  };

  const handleSortByChange = (option) => {
    setSortBy(option);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    Yelp.searchBusinesses(term, location, sortBy)
      .then((businesses) => {
        onSearch(businesses);
      })
      .catch((error) => {
        console.error("Error searching businesses:", error);
      });
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarSortOptions}>
        <ul>
          {Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
              <li
                key={sortByOptionValue}
                className={styles[getSortByClass(sortByOptionValue)]}
                onClick={() => handleSortByChange(sortByOptionValue)}
              >
                {sortByOption}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.searchBarFields}>
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
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
