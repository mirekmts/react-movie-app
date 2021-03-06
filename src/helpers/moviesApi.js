import * as api from './api';
import { setToken } from './jwt';

export const serverUrl = 'http://marblejs-example.herokuapp.com';

export const loginUser = (login, password) => api.post(`${serverUrl}/api/v1/auth/login`, { login, password })
  .then((res) => {
    setToken(res.token);
    return Promise.resolve(res);
  })
  .catch(error => Promise.reject(error));

export const getMovie = id => api.get(`${serverUrl}/api/v1/movie/${id}`)
  .then(res => Promise.resolve(res))
  .catch(error => Promise.reject(error));

export const getAllMovies = ({
  limit = 0, page = 1, sortBy = '_id', sortDir = 1,
}) => api.get(`${serverUrl}/api/v1/movie?limit=${limit}&page=${page}&sortBy=${sortBy}&sortDir=${sortDir}`)
  .then(res => Promise.resolve(res))
  .catch(error => Promise.reject(error));

export const getActor = id => api.get(`${serverUrl}/api/v1/actor/${id}`)
  .then(res => Promise.resolve(res))
  .catch(error => Promise.reject(error));
