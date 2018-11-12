import * as actions from '../actions';

const initialState = {
  movies: [],
  total: 0,
  loading: false,
  error: false,
  selectedMovie: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies.collection,
        total: action.payload.movies.total,
      };
    case actions.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: [],
        total: 0,
      };
    case actions.SET_SINGLE_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload.movie,
      };
    default:
      return state;
  }
};

export default moviesReducer;
