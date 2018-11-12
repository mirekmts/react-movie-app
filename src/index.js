import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';
import { Login, SingleMovie } from './components';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Route exact path="/" component={App} />
        <Route exact path="/movie/:movieId" component={SingleMovie} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
