import React from "react";
import Search from "./Search";
import NewListingForm from "./NewListingForm";

function Header({onSearchSubmit, searchTerm, onSearchChange, onAddNewListingSubmit, url}) {
  return (
    <header style={{display: "block"}}>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        onSearchSubmit={onSearchSubmit} 
        searchTerm={searchTerm} 
        onSearchChange={onSearchChange}
      />
      <NewListingForm onAddNewListingSubmit={onAddNewListingSubmit} url={url} />
    </header>
  );
}

export default Header;
