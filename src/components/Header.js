import React from "react";
import Search from "./Search";

function Header({onSearchSubmit, searchTerm, onSearchChange}) {
  return (
    <header>
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
    </header>
  );
}

export default Header;
