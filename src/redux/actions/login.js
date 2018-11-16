import * as api from '../../helpers/moviesApi';

export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUserBegin = () => ({
  type: LOGIN_USER_BEGIN,
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: { error },
});

export const loginUser = (userName, password) => (dispatch) => {
  dispatch(loginUserBegin());
  return api.loginUser(userName, password)
    .then((res) => {
      dispatch(loginUserSuccess());
      return Promise.resolve(res);
    })
    .catch((error) => {
      dispatch(loginUserFailure(error));
      return Promise.reject(error);
    });
};
