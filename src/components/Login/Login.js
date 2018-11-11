import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="Username goes here..."
              name="username"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            {this.state.error && <p>Invalid username/password</p>}
            <button
              className="form-submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
};

export default Login;
