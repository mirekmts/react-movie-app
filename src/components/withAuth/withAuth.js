import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loggedIn } from '../../helpers/jwt';
import { LoadingSpinner } from '../index';

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
        return <LoadingSpinner />;
      }

      return <AuthComponent {...this.props} />;
    }
  }

  AuthWrapped.propTypes = {
    history: PropTypes.object,
  };

  return AuthWrapped;
}
