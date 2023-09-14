import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.searchBarFields}>
        <input placeholder="Search Business" />
        <input placeholder="Where?" />
      </div>
      <div className={styles.searchBarSubmit}>
        <button>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
