import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.scss';

class LoadingSpinner extends PureComponent {
  render() {
    return <div className={`lds-dual-ring ${this.props.black ? 'black' : ''}`} />;
  }
}

LoadingSpinner.propTypes = {
  black: PropTypes.bool,
};

export default LoadingSpinner;
