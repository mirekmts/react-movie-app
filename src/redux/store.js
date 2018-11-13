import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import { loadState, saveState } from '../helpers/localStorage';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

store.subscribe(() => {
  saveState({
    filters: store.getState().filters,
  });
});

export default store;
