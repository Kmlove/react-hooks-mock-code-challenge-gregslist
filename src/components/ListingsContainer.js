import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, url, onDelete}) {

  const listingCardsArray = listings.map(listing => {
    return (
      <ListingCard 
        key={listing.id} 
        listing={listing} 
        url={url} 
        onDelete={onDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingCardsArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
