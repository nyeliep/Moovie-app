
const BASE_URL=process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
export const getMovies = async()=>{
    try {
       const response = await fetch(`${BASE_URL}/3/discover/movie`,{

        method: "GET",
        headers:{
            Authorization:`Bearer ${ACCESS_TOKEN}`,
            "Content-Type":"application/json",
        },
       })
       const result =await response.json();
       return result;

    } 
    catch (error) {
       return error.message; 
    }
}

export const fetchMoviesByGenre = async()=>{
  try {
     const response = await fetch(`${BASE_URL}/3/discover/movie`,{

      method: "GET",
      headers:{
          Authorization:`Bearer ${ACCESS_TOKEN}`,
          "Content-Type":"application/json",
      },
     })
     const result =await response.json();
     return result;

  } 
  catch (error) {
     return error.message; 
  }
}

export const nowPlaying = async()=>{
  try {
     const response = await fetch(`${BASE_URL}3/movie/now_playing`,{

      method: "GET",
      headers:{
          Authorization:`Bearer ${ACCESS_TOKEN}`,
          "Content-Type":"application/json",
      },
     })
     const result =await response.json();
     return result;

  } 
  catch (error) {
     return error.message; 
  }
}




export const upcomingMovies = async()=>{
    try {
       const response = await fetch(`${BASE_URL}/3/discover/movie`,{

        method: "GET",
        headers:{
            Authorization:`Bearer ${ACCESS_TOKEN}`,
            "Content-Type":"application/json",
        },
       })
       const result =await response.json();
       return result;

    } 
    catch (error) {
       return error.message; 
    }
}


export const searchMovies = async (searchQuery) => {
    try {
      const response = await fetch(`${BASE_URL}/3/search/movie?query=${searchQuery})}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  }
  


export const genres = async()=>{
    try {
       const response = await fetch(`${BASE_URL}/3/genre/movie/list`,{

        method: "GET",
        headers:{
            Authorization:`Bearer ${ACCESS_TOKEN}`,
            "Content-Type":"application/json",
        },
       })
       const result =await response.json();    
       {/* Display search results here */}
       return result;

    } 
    catch (error) {
       return error.message; 
    }
}



  export const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/3/movie/${movieId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };