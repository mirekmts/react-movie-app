import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loggedIn } from '../../helpers/jwt';
import './Login.scss';
import { loginUser } from '../../redux/actions';
import { LoadingSpinner } from '../../components';

export class Login extends Component {
  state = {
    username: '',
    password: '',
    error: false,
    loading: false,
  };

  componentDidMount() {
    if (loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    this.setState({
      loading: true,
      error: false,
    });
    e.preventDefault();

    this.props.loginUser(this.state.username, this.state.password)
      .then(() => this.props.history.replace('/'))
      .catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
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
            {this.state.error && <p className="error-login-message">Invalid username/password</p>}
            {this.state.loading && <div><LoadingSpinner black /></div>}
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
  }
}

Login.propTypes = {
  history: PropTypes.object,
  loginUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  loginUser: (login, password) => dispatch(loginUser(login, password)),
});

export default connect(null, mapDispatchToProps)(Login);
