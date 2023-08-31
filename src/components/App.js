import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const url = "http://localhost:6001/listings"
  const [ listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function onDelete(deletedListing){
    const wODeletedListingArray = listings.filter(listing => {
      return listing.id !== deletedListing.id
    })
    setListings(wODeletedListingArray)
  }

  function onSearchSubmit(searchWord){
    const filteredListings = listings.filter(listing => {
      return listing.description.toLowerCase().includes(searchWord.toLowerCase())
    })
    setListings(filteredListings)
  }

  function onSearchChange(value){
    setSearchTerm(value)
  }

  useEffect(()=> {
    if(searchTerm === ""){
      fetch(url)
      .then(res => res.json())
      .then(data => setListings(data))
    }
  }, [searchTerm])


  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm} 
        onSearchSubmit={onSearchSubmit} 
        onSearchChange={onSearchChange}
      />
      <ListingsContainer 
        url={url} 
        listings={listings} 
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
