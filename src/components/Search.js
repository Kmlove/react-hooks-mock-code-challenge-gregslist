
function Search({onSearchSubmit, searchTerm, onSearchChange}) {

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(searchTerm)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
