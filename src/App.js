import React, { useState } from "react";
import styles from "./App.module.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (searchResults) => {
    setBusinesses(searchResults);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Ravenous</h1>
      <SearchBar onSearch={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
