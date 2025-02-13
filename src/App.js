import React, { useState } from "react";
import BusinessList from "./components/BusinessList/BusinessList";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import { apiKey } from "./Utilities/YelpAPI";

function App() {
  const [listings, setListings] = useState([]);
  console.log(listings);

  return (
    <div className="App">
      <Header />
      <SearchBar setListings={setListings} />
      <BusinessList listings={listings} />
    </div>
  );
}

export default App;
