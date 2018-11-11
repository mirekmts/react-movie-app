import React, { Component } from 'react';
import { withAuth } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Movie App
      </div>
    );
  }
}

export default withAuth(App);
