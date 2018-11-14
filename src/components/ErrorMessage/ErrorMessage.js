import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.scss';

class ErrorMessage extends PureComponent {
  render() {
    return <div className="error-message">{this.props.message}</div>;
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 'An error occurred. Please try again later.',
};

export default ErrorMessage;
