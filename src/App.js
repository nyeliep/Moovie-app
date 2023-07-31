import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetMovies from './Components/GetMovies';
import MovieSlider from './Components/Sections/Slider/slider';
import MovieDetailsPage from "./Components/MovieDetails/movieDeets";
import MovieCategory from './Components/Sections/Category/category';
import Landing from "./Components/Screen/landing";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/slider" element={<MovieSlider />} />
          <Route path="/category" element={<MovieCategory />} />
          <Route path="/" element={<GetMovies />} />
          <Route path="/movie/:movieId" component={MovieDetailsPage} />
          {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;


