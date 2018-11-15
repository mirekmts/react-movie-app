import * as actions from './index';

describe('Actions Filters', () => {
  it('creates an actions to set filters', () => {
    const name = 'limit';
    const value = 2;
    const expectedAction = {
      type: actions.SET_FILTER,
      payload: {
        name,
        value,
      },
    };

    expect(actions.setFilter(name, value)).toEqual(expectedAction);
  });

  it('creates an actions to set page', () => {
    const page = 2;
    const expectedAction = {
      type: actions.SET_PAGE,
      payload: {
        page,
      },
    };

    expect(actions.setPage(page)).toEqual(expectedAction);
  });
});
