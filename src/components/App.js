import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const url = "http://localhost:6001/listings"
  const [ listings, setListings] = useState([])
  
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

  return (
    <div className="app">
      <Header />
      <ListingsContainer 
        url={url} 
        listings={listings} 
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
