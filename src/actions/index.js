let ApiKey = '4936370c'

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }

export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", id };
  }
  
export function getMovies(titulo) {
    
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

export function getMovieDetail(imdbID) {
    
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${imdbID}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
  } 