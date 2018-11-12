import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filtersReducer from './filters';

export default combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
});
