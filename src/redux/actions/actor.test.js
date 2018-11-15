import fetchMock from 'fetch-mock';
import * as actions from './index';
import mockStore from '../helpers/reduxMockStore';
import { serverUrl } from '../../helpers/moviesApi';
import { singleActor } from '../../data/fixtures';

describe('Actions Actor', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_ACTOR_SUCCESS when fetching has been done', () => {
    fetchMock
      .getOnce(`${serverUrl}/api/v1/actor/${singleActor.imdbId}`, {
        body: singleActor,
      });

    const expectedAction = [
      {
        type: actions.FETCH_ACTOR_BEGIN,
      },
      {
        type: actions.FETCH_ACTOR_SUCCESS,
        payload: {
          actor: singleActor,
        },
      },
    ];

    return store.dispatch(actions.fetchActor(singleActor.imdbId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

  it('creates FETCH_ACTOR_FAILURE when fetching has been done', () => {
    const errorMessage = 'Some No Good Error';
    fetchMock
      .getOnce(`${serverUrl}/api/v1/actor/${singleActor.imdbId}`, {
        throws: errorMessage,
      });

    const expectedAction = [
      {
        type: actions.FETCH_ACTOR_BEGIN,
      },
      {
        type: actions.FETCH_ACTOR_FAILURE,
        payload: {
          error: errorMessage,
        },
      },
    ];

    return store.dispatch(actions.fetchActor(singleActor.imdbId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
