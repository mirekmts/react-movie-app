import fetchMock from 'fetch-mock';
import * as actions from './index';
import mockStore from '../helpers/reduxMockStore';
import { serverUrl } from '../../helpers/moviesApi';
import { singleMovie, movies, filters } from '../../data/fixtures';

describe('Actions Movies', () => {
  let store;
  const queryStr = `limit=${filters.limit}&page=${filters.page}&sortBy=${filters.sortBy}&sortDir=${filters.sortDir}`;
  const errorMessage = 'Somthing went wrong';
  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_MOVIES_SUCCESS when fetching has been done', () => {
    fetchMock
      .getOnce(`${serverUrl}/api/v1/movie?${queryStr}`, {
        body: movies,
      });

    const expectedAction = [
      {
        type: actions.FETCH_MOVIES_BEGIN,
      },
      {
        type: actions.FETCH_MOVIES_SUCCESS,
        payload: {
          movies,
        },
      },
    ];

    return store.dispatch(actions.fetchMovies({ ...filters }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

  it('creates FETCH_MOVIES_FAILURE when fetching has been done', () => {
    fetchMock
      .getOnce(`${serverUrl}/api/v1/movie?${queryStr}`, {
        throws: errorMessage,
      });

    const expectedAction = [
      {
        type: actions.FETCH_MOVIES_BEGIN,
      },
      {
        type: actions.FETCH_MOVIES_FAILURE,
        payload: {
          error: errorMessage,
        },
      },
    ];

    return store.dispatch(actions.fetchMovies({ ...filters }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

  it('creates FETCH_SINGLE_MOVIE_SUCCESS when fetching has been done', () => {
    fetchMock
      .getOnce(`${serverUrl}/api/v1/movie/${singleMovie.imdbId}`, {
        body: singleMovie,
      });

    const expectedAction = [
      {
        type: actions.FETCH_SINGLE_MOVIE_BEGIN,
      },
      {
        type: actions.FETCH_SINGLE_MOVIE_SUCCESS,
        payload: {
          movie: singleMovie,
        },
      },
    ];

    return store.dispatch(actions.fetchSingleMovie(singleMovie.imdbId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

  it('creates FETCH_SINGLE_MOVIE_FAILURE when fetching has been done', () => {
    fetchMock
      .getOnce(`${serverUrl}/api/v1/movie/${singleMovie.imdbId}`, {
        throws: errorMessage,
      });

    const expectedAction = [
      {
        type: actions.FETCH_SINGLE_MOVIE_BEGIN,
      },
      {
        type: actions.FETCH_SINGLE_MOVIE_FAILURE,
        payload: {
          error: errorMessage,
        },
      },
    ];

    return store.dispatch(actions.fetchSingleMovie(singleMovie.imdbId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
