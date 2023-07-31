import React, { useEffect, useState } from "react";
import { getMovies } from "../../Utils/utilities";
import { Link } from "react-router-dom";
import "./style.css";
import ImageContainer from "../../Atom/ImageContainer";

const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      console.log({ movies });
      setLoading(false);
      setMovies(movies.results);
    })();
  }, []);

  if (loading) {
    return <h1>Loading movies...</h1>;
  }

  return (
    <div className="contain">
      {movies && movies.length > 0 ? (
        movies.map((item) => ( 
          <Link key={item.id} to={`/movie/${item.id}`}>
            <ImageContainer props={item} />
          </Link>
        ))
      ) : (
        <h1>No movies found</h1>
      )}
    </div>
  );
};

export default GetMovies;





