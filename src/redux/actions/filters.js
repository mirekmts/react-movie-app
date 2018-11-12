export const SET_FILTER = 'SET_FILTER';
export const SET_PAGE = 'SET_PAGE';

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: {
    name,
    value,
  },
});

export const setPage = page => ({
  type: SET_PAGE,
  payload: {
    page,
  },
});
