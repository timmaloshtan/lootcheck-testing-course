import React, { Component } from 'react';

import Wallet from './Wallet';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Loot Check</h2>
        <hr />
        <Wallet />
      </div>
    )
  }
}

export default App;
