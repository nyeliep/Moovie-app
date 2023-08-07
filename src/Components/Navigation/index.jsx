import React, { useState } from "react";
import "./style.css"
import { searchMovies } from "../../Utils/utilities";

const Navigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
    handleSearch(event.target.value)
  };
  const handleSearch = async () => {
    const results = await searchMovies(searchValue);
    setSearchResults(results.results);
  
  };


    return (
    <div className={`navbar-container ${menuActive ? "menu-active" : ""}`}>
      <a href="/" className="logo">
        M<span className="logo-highlight">oo</span>vie
      </a>

      <div className="search-container">
          <input

            className="search-input" 
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

      <a href="#" className="nav-link">
        Home
      </a>
      <a href="#" className="nav-link">
        My List
      </a>
      <button className="sign-in-button">Sign in</button>

      {searchResults.length > 0 && (
        <div className="results-container">
        <div className="search-results">
          <h2>Search Results:</h2>
          <ul>
          {searchResults.map((movie) => (
            <div className="movie-thumbnail" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
          </ul>
        </div>
        </div>
      )}

      {loading && <h6 className="loading-text">Searching...</h6>}
    </div>
  );
};
export default Navigation;



