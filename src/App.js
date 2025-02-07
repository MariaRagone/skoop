import React, { useState } from "react";
import BusinessList from "./components/BusinessList/BusinessList";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
