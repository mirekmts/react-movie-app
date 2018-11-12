import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filtersReducer from './filters';
import actorReducer from './actor';

export default combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
  actor: actorReducer,
});
