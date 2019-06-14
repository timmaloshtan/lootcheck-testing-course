import React, { Component } from 'react';

import Wallet from './Wallet';

export class App extends Component {
  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(console.log);
  }
  
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
