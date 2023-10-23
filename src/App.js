import React from "react";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

function App() {
  const businesses = [
    {
      id: 1,
      imageSrc: "url-to-image1",
      name: "Business 1",
      address: "123 Main St",
      city: "Cityville",
      state: "CA",
      zipCode: "12345",
      category: "Restaurant",
      rating: 4.5,
      reviewCount: 100,
    },
    {
      id: 2,
      imageSrc: "url-to-image2",
      name: "Business 2",
      address: "456 Elm St",
      city: "Townsville",
      state: "NY",
      zipCode: "54321",
      category: "Cuisine",
      rating: 4.0,
      reviewCount: 50,
    },
  ];

  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
