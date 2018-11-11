import { loggedIn, getToken } from './jwt';

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const apiCall = (url, method, body) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (loggedIn()) {
    headers.Authorization = `Bearer ${getToken()}`;
  }

  return (
    fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    })
      .then(checkStatus)
      .then(response => response.json())
  );
};

export const get = (url, body) => apiCall(url, 'GET', body);

export const post = (url, body) => apiCall(url, 'POST', body);
