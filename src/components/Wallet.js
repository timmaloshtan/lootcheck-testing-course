import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    const { balance } = this.props;
    return (
      <div className="wallet">
        <h3 className="wallet__balance">Wallet balance: {balance}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balance: state,
});

export default connect(mapStateToProps, null)(Wallet);
