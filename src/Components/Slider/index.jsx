import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { Link } from "react-router-dom";
import { upcomingMovies,nowPlaying } from '../../Utils/utilities';

const MovieSlider = () => {


  const [comingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const movies = await upcomingMovies();
      console.log({ movies });
      setLoading(false);
      setUpcomingMovies(movies.results);
    })();
  }, []);

  if (loading) {
    return <h1>Loading movies...</h1>;
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const limit = 20; 
  const slicedMovies = comingMovies.slice(15, limit);

  return (
    <div className="slider-container">
      <Slider {...settings} className="container">
        {slicedMovies.length > 0 ? (
          slicedMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="image-link">
              <div key={movie.id} className="image-container" style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path})` }}>
                <div className="movie-info-overlay">
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <span>{movie.rating}</span>
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


