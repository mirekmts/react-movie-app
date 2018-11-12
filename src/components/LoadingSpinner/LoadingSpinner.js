import React, { PureComponent } from 'react';
import './LoadingSpinner.scss';

class LoadingSpinner extends PureComponent {
  render() {
    return <div className="lds-dual-ring" />;
  }
}

export default LoadingSpinner;
