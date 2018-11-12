import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

export default store;
