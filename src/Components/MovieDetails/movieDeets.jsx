import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../Utils/utilities";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    })();
  }, [movieId]);

  if (!movieDetails) {
    return <h1>Loading movie details...</h1>;
  }

  return (
    <div className="movie-details-expanded">
      <h2>{movieDetails.title}</h2>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Overview: {movieDetails.overview}</p>
      {/* Display more movie details here */}
    </div>
  );
};

export default MovieDetailsPage;



