import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin = () => {
    const { bitcoin, balance } = this.props;

    if (!bitcoin.bpi) {
      return '';
    }

    const rate = bitcoin.bpi.USD.rate.split(',').join('');

    return balance / parseInt(rate);
  }
  
  render() {
    return (
      <div className="loot">
        <h3>BTC balance: {this.computeBitcoin()}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  fetchBitcoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
