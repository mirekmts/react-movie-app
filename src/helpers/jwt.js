import decode from 'jwt-decode';

const localStorageTokenName = 'jwt_token';

export const setToken = jwtToken => localStorage.setItem(localStorageTokenName, jwtToken);

export const getToken = () => localStorage.getItem(localStorageTokenName);

export const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);

    if (decoded.exp < Date.now() / 1000) {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};

export const loggedIn = () => {
  const token = getToken();

  return !!token && !isTokenExpired(token);
};
