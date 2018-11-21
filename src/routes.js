import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import {
  Login, SingleMovie, Actor, Home, FourOhFour,
} from './pages';

const Routes = () => (
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
  </Provider>
);

export default Routes;
