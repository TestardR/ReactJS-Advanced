import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {
  render() {
    return <div>{this.props.timestamp.toString()}</div>;
  }
}

// Timestamp gets its props through the storeProvider and maps prop that is being read from the store state.
function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);
