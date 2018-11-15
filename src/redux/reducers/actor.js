import * as actions from '../actions';

export const initialState = {
  actor: {},
  loading: false,
  error: false,
};

const actorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ACTOR_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actions.FETCH_ACTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        actor: action.payload.actor,
      };
    case actions.FETCH_ACTOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        actor: null,
      };
    default:
      return state;
  }
};

export default actorReducer;
