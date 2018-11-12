import * as api from '../../helpers/moviesApi';

export const FETCH_ACTOR_BEGIN = 'FETCH_ACTOR_BEGIN';
export const FETCH_ACTOR_SUCCESS = 'FETCH_ACTOR_SUCCESS';
export const FETCH_ACTOR_FAILURE = 'FETCH_ACTOR_FAILURE';

export const fetchActorBegin = () => ({
  type: FETCH_ACTOR_BEGIN,
});

export const fetchActorSuccess = actor => ({
  type: FETCH_ACTOR_SUCCESS,
  payload: { actor },
});

export const fetchActorFailure = error => ({
  type: FETCH_ACTOR_FAILURE,
  payload: { error },
});

export const fetchActor = id => (dispatch) => {
  dispatch(fetchActorBegin());
  return api.getActor(id)
    .then(res => dispatch(fetchActorSuccess(res)))
    .catch(error => dispatch(fetchActorFailure(error)));
};
