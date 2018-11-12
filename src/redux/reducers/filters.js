import * as actions from '../actions';

const initialState = {
  limit: 2,
  page: 1,
  sortBy: 'title',
  sortDir: 1,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_FILTER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        page: 1,
      };
    case actions.SET_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
};

export default filtersReducer;
