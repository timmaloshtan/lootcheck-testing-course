import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: undefined,
    };
  }

  handleChange = e => {
    const value = parseInt(e.target.value, 10);

    this.setState({
      transaction: isNaN(value) ? undefined : value,
    });
  }

  handleDeposit = () => {
    const { deposit } = this.props;
    const { transaction } = this.state;

    deposit(transaction);
    this.setState({ transaction: 0 });
  }

  handleWithdraw = () => {
    const { withdraw } = this.props;
    const { transaction } = this.state;

    withdraw(transaction);
    this.setState({ transaction: 0 });
  }

  render() {
    const { balance } = this.props;
    return (
      <div className="wallet">
        <h3 className="wallet__balance">Wallet balance: {balance}</h3>
        <input
          className='wallet__input'
          value={this.state.transaction}
          onChange={this.handleChange}
        />
        <button
          className="btn-deposit"
          onClick={this.handleDeposit}
        >
          Deposit
        </button>
        <button
          className="btn-withdraw"
          onClick={this.handleWithdraw}
        >
          Withdraw
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balance: state,
});

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);
