import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import {
  Login, SingleMovie, Actor, Home, FourOhFour,
} from './pages';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:movieId" component={SingleMovie} />
          <Route exact path="/actor/:actorId" component={Actor} />
          <Route exact path="/login" component={Login} />
          <FourOhFour />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
