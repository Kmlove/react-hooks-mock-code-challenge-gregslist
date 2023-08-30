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

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
