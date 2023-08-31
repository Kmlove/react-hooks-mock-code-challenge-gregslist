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
  
  useEffect(()=> {
    if(searchTerm === ""){
      fetch(url)
      .then(res => res.json())
      .then(data => setListings(data))
    }
  }, [searchTerm])

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

  function onAddNewListingSubmit(newListing){
    setListings([...listings, newListing])
  }


  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm} 
        onSearchSubmit={onSearchSubmit} 
        onSearchChange={onSearchChange}
        onAddNewListingSubmit={onAddNewListingSubmit}
        url={url}
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
