import React, { useState } from "react";
import BusinessList from "./components/BusinessList/BusinessList";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessPage from "./components/BusinessPage/BusinessPage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [listings, setListings] = useState([]);
  console.log(listings);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/BusinessPage/" element={<BusinessPage />} />
          <Route
            path="/"
            element={
              <>
                <SearchBar setListings={setListings} />
                <BusinessList listings={listings} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
