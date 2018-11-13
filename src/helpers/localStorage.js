const localStorageStateName = 'reactMovieAppFilters';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageStateName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageStateName, serializedState);
  } catch (err) {
    // do nothing
  }
};
