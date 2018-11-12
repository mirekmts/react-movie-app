import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorMessage extends PureComponent {
  render() {
    return <div>{this.props.message}</div>;
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 'An error occurred. Please try again.',
};

export default ErrorMessage;
