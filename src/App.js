import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetMovies from './Components/GetMovies';
import MovieSlider from "./Components/Slider";
import MovieDetails from "./Components/MovieDetails";
import SearchResults from "./Components/SearchResults";
import MovieGenre from "./Components/Genre";
import Landing from "./Components/Screen/landing";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search-results" component={SearchResults} />
          <Route path="/slider" element={<MovieSlider />} />
          <Route path="/genre" element={<MovieGenre />} />
          <Route path="/" element={<GetMovies />} />
          <Route exact path="/movie_id/" component={MovieDetails} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;


