import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get query params
import "./style.css";

const SearchResults = () => {
  const location = useLocation();
  const searchValue = new URLSearchParams(location.search).get("query"); // Get the search query from the URL

  // Fetch and display search results using the searchValue

  return (
    <div className="search-results-container">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default SearchResults;
