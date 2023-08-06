import React from "react";
import Navigation from "../Navigation";
import GetMovies from "../GetMovies";
import MovieGenre from "../Genre";
import MovieSlider from "../Slider";
// import MovieDetails from "../MovieDetails/movieDeets";
import Footer from "../Footer";

function Landing(){
    return(
        <>
        <Navigation/>
        <MovieSlider/>
        <MovieGenre/>
        <GetMovies/>
        <Footer/>
        </>
    )
}

export default Landing;
