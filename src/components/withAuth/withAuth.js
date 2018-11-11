import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loggedIn } from '../../helpers/jwt';

export default function withAuth(AuthComponent) {
  class AuthWrapped extends Component {
    state = {
      waitingForAuthorizationCheck: true,
    };

    componentDidMount() {
      if (!loggedIn()) {
        this.props.history.replace('/login');
      }

      this.setState({
        waitingForAuthorizationCheck: false,
      });
    }

    render() {
      if (this.state.waitingForAuthorizationCheck) {
        return <h1>Loading...</h1>;
      }

      return <AuthComponent history={this.props.history} />;
    }
  }

  AuthWrapped.propTypes = {
    history: PropTypes.object,
  };

  return AuthWrapped;
}
