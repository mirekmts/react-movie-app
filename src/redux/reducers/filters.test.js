import * as actions from '../actions';
import filtersReducer, { initialState } from './filters';

describe('Reducers Filters', () => {
  it('should return initial state', () => {
    expect(filtersReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_FILTER', () => {
    const createAction = {
      type: actions.SET_FILTER,
      payload: {
        name: 'limit',
        value: 2,
      },
    };

    expect(filtersReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        [createAction.payload.name]: createAction.payload.value,
        page: 1,
      });
  });

  it('should handle SET_PAGE', () => {
    const createAction = {
      type: actions.SET_PAGE,
      payload: {
        page: 2,
      },
    };

    expect(filtersReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        page: createAction.payload.page,
      });
  });
});
