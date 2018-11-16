import fetchMock from 'fetch-mock';
import * as actions from './index';
import mockStore from '../helpers/reduxMockStore';
import { serverUrl } from '../../helpers/moviesApi';

describe('Actions Login', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates LOGIN_USER_SUCCESS when fetching has been done', () => {
    fetchMock
      .postOnce(`${serverUrl}/api/v1/auth/login`, {
        body: { token: '1' },
      });

    const expectedAction = [
      {
        type: actions.LOGIN_USER_BEGIN,
      },
      {
        type: actions.LOGIN_USER_SUCCESS,
      },
    ];

    return store.dispatch(actions.loginUser('admin', 'admin'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
