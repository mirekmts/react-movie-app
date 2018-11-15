import * as actions from '../actions';
import moviesReducer, { initialState } from './movies';
import { singleMovie, movies } from '../../data/fixtures';

describe('Reducers Movies', () => {
  it('should return initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MOVIES_BEGIN', () => {
    const createAction = {
      type: actions.FETCH_MOVIES_BEGIN,
    };

    expect(moviesReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: true,
        error: false,
      });
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    const createAction = {
      type: actions.FETCH_MOVIES_SUCCESS,
      payload: {
        movies: {
          total: 4,
          collection: movies,
        },
      },
    };

    expect(moviesReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: false,
        movies: createAction.payload.movies.collection,
        total: createAction.payload.movies.total,
      });
  });

  it('should handle FETCH_MOVIES_FAILURE', () => {
    const createAction = {
      type: actions.FETCH_MOVIES_FAILURE,
      payload: {
        error: 'Bad request',
      },
    };

    expect(moviesReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: false,
        error: createAction.payload.error,
        movies: [],
        total: 0,
      });
  });

  it('should handle FETCH_SINGLE_MOVIE_BEGIN', () => {
    const createAction = {
      type: actions.FETCH_SINGLE_MOVIE_BEGIN,
    };

    expect(moviesReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: true,
        error: false,
      });
  });

  it('should handle FETCH_SINGLE_MOVIE_SUCCESS', () => {
    const createAction = {
      type: actions.FETCH_SINGLE_MOVIE_SUCCESS,
      payload: {
        movie: singleMovie,
      },
    };

    expect(moviesReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: false,
        selectedMovie: createAction.payload.movie,
      });
  });

  it('should handle FETCH_SINGLE_MOVIE_FAILURE', () => {
    const createAction = {
      type: actions.FETCH_SINGLE_MOVIE_FAILURE,
      payload: {
        error: 'Bad request',
      },
    };

    expect(moviesReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: false,
        error: createAction.payload.error,
        selectedMovie: [],
      });
  });
});
