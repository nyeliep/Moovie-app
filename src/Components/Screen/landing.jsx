import React from "react";
import Navbar from "../Sections/Navigation/navbar";
import GetMovies from "../GetMovies";
import MovieCategory from "../Sections/Category/category";
import MovieSlider from "../Sections/Slider/slider";
// import MovieDetails from "../MovieDetails/movieDeets";
import Footer from "../Sections/Footer/footer";

function Landing(){
    return(
        <>
        <Navbar/>
        <MovieSlider/>
        <MovieCategory/>
        <GetMovies/>
        <Footer/>
        </>
    )
}

export default Landing;
