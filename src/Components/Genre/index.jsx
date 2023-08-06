import React, { useState, useEffect } from 'react';
import { genres, getMovies } from '../../Utils/utilities'; // Update the import paths based on your utilities file
import './style.css';

const MovieGenre = () => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreResult = await genres();
        setMovieGenres(genreResult.genres);

        const movieResult = await getMovies();
        setMovies(movieResult.movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
  if (selectedGenre !== null) {
    const filteredMovies = movies?.filter((movie) =>
      movie.genre_ids.includes(selectedGenre)
    ) || [];
    setFilteredMovies(filteredMovies);
  } else {
    setFilteredMovies(movies);
  }
}, [selectedGenre, movies]);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="genre-container">
      {movieGenres && movieGenres.length > 0 ? (
        <>
          <div
            className={`genre-tag ${selectedGenre === null ? 'selected' : ''}`}
            onClick={() => handleGenreClick(null)}
          >
            All
          </div>
          {movieGenres.map((item) => (
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

export default MovieGenre;

