import * as actions from '../actions';
import actorReducer, { initialState } from './actor';
import { singleActor } from '../../data/fixtures';

describe('Reducers Actor', () => {
  it('should return initial state', () => {
    expect(actorReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_ACTOR_BEGIN', () => {
    const createAction = {
      type: actions.FETCH_ACTOR_BEGIN,
    };

    expect(actorReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: true,
        error: false,
      });
  });

  it('should handle FETCH_ACTOR_SUCCESS', () => {
    const createAction = {
      type: actions.FETCH_ACTOR_SUCCESS,
      payload: {
        actor: singleActor,
      },
    };

    expect(actorReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: false,
        actor: createAction.payload.actor,
      });
  });

  it('should handle FETCH_ACTOR_FAILURE', () => {
    const createAction = {
      type: actions.FETCH_ACTOR_FAILURE,
      payload: {
        error: 'actor don\'t exist',
      },
    };

    expect(actorReducer(undefined, createAction))
      .toEqual({
        ...initialState,
        loading: false,
        error: createAction.payload.error,
        actor: null,
      });
  });
});
