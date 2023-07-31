import React, { useState, useEffect, useCallback } from 'react';
import { movieList , getMovies} from '../../../Utils/utilities';
import './category.css';

const DISCOVER_MOVIES = process.env.REACT_APP_DISCOVER_MOVIES;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const MovieCategory = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const result = await movieList();
        setGenres(result.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
        setGenres([]);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {

    if (selectedGenre !== null) {
      const filteredMovies = movies.filter((movie) =>
        movie.genre_ids.includes(selectedGenre)
      );
      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(movies); 
    }
  }, [selectedGenre, movies]);



  const handleGenreClick = useCallback((genreId) => {
    setSelectedGenre(genreId);
  }, []);

  return (
    <div className="genre-container">
      {genres && genres.length > 0 ? (
        <>
          <div
            className={`genre-tag ${selectedGenre === null ? 'selected' : ''}`}
            onClick={() => handleGenreClick(null)}
          >
            All
          </div>
          {genres.map((item) => (
            <div
              key={item.id}
              className={`genre-tag ${selectedGenre === item.id ? 'selected' : ''}`}
              onClick={() => handleGenreClick(item.id)}
            >
              {item.name}
            </div>
          ))}
        </>
      ) : (
        <div>Loading genres...</div>
      )}

     
      <div className="movie-list">
        {filteredMovies && filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-item">
              {/* Display the movie details here */}
              <h3>{movie.title}</h3>
              {/* Add more movie details */}
            </div>
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>
    </div>
  );
};

export default MovieCategory;



