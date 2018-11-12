import * as api from '../../helpers/moviesApi';

export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const SET_SINGLE_MOVIE = 'SET_SINGLE_MOVIE';

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

export const setSingleMovie = movie => ({
  type: SET_SINGLE_MOVIE,
  payload: { movie },
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
