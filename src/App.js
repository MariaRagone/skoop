import React, { useState } from "react";
import BusinessList from "./components/BusinessList";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const businesses = [
    {
      src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
      name: "Cheesy Solutions",
      address: "123 Tech Lane",
      city: "Detroit",
      state: "MI",
      category: "American",
      rating: 5,
      reviewCount: 30,
    },
    {
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Spice Haven",
      address: "789 Curry Ave",
      city: "Houston",
      state: "TX",
      category: "Indian",
      rating: 4.5,
      reviewCount: 120,
    },
    {
      src: "https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=",
      name: "Burger Bros",
      address: "456 Grill St",
      city: "Los Angeles",
      state: "CA",
      category: "Fast Food",
      rating: 4.2,
      reviewCount: 75,
    },
    {
      src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg",
      name: "Taco Empire",
      address: "321 Fiesta Blvd",
      city: "Phoenix",
      state: "AZ",
      category: "Mexican",
      rating: 4.8,
      reviewCount: 60,
    },
  ];

  // const onSearchChange = ({ event }) => {
  //   const { value } = target;
  //   onChange={(e) => onSearchChange(e.target.value)}

  // };
  // const filteredBusinesses = businesses.filter((business) =>
  //   business.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="App">
      <Header />

      <SearchBar
      // searchTerm={searchTerm}
      // location={setLocation}
      // onSearchChange={setSearchTerm}
      />
      <BusinessList
      // businesses={filteredBusinesses}
      />
    </div>
  );
}

export default App;
