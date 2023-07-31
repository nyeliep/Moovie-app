import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { Link } from "react-router-dom";
import { UpcomingMovies } from '../../../Utils/utilities';

const MovieSlider = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const movieIdsToFetch = [614930, 346698, 667717, 459003, 667538]; // Add the desired movie IDs here
        const upcoming = await UpcomingMovies(movieIdsToFetch);
        console.log("API Response:", upcoming);
        setUpcomingMovies(upcoming);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <h4>Loading movies...</h4>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="container">
        {upcomingMovies.length > 0 ? (
          upcomingMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="image-link">
              <div key={movie.id} className="image-container" style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path})` }}>
                <div className="movie-info-overlay">
                <span>{movie.release_date}</span>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <span>{movie.rating}</span>
                  <span>{movie.popularity}</span>
                
                  <div className="buttons-container">
                    <button className="watch-now-button">Watch Now</button>
                    <button className="add-to-favorites-button">Add to Favorites</button>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No movies found</h1>
        )}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <button className="custom-arrow prev-arrow" onClick={onClick}>&#10094;</button>;
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <button className="custom-arrow next-arrow" onClick={onClick}>&#10095;</button>;
};

export default MovieSlider;


