import * as api from '../../helpers/moviesApi';

export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_SINGLE_MOVIE_BEGIN = 'FETCH_SINGLE_MOVIE_BEGIN';
export const FETCH_SINGLE_MOVIE_SUCCESS = 'FETCH_SINGLE_MOVIE_SUCCESS';
export const FETCH_SINGLE_MOVIE_FAILURE = 'FETCH_SINGLE_MOVIE_FAILURE';

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

export const fetchMovies = (filters = {}) => (dispatch) => {
  dispatch(fetchMoviesBegin());
  return api.getAllMovies(filters)
    .then(res => dispatch(fetchMoviesSuccess(res)))
    .catch(error => dispatch(fetchMoviesFailure(error)));
};

export const fetchSingleMovieBegin = () => ({
  type: FETCH_SINGLE_MOVIE_BEGIN,
});

export const fetchSingleMovieSuccess = movie => ({
  type: FETCH_SINGLE_MOVIE_SUCCESS,
  payload: { movie },
});

export const fetchSingleMovieFailure = error => ({
  type: FETCH_SINGLE_MOVIE_FAILURE,
  payload: { error },
});

export const fetchSingleMovie = id => (dispatch) => {
  dispatch(fetchSingleMovieBegin());
  return api.getMovie(id)
    .then(res => dispatch(fetchSingleMovieSuccess(res)))
    .catch(error => dispatch(fetchSingleMovieFailure(error)));
};
