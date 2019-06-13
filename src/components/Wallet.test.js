import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';

describe('Wallet component', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = {
    balance: 0,
    deposit: mockDeposit,
    withdraw: mockWithdraw,
  };
  const wallet = shallow(<Wallet {...props} />);

  it('should render correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('should display the balance from props', () => {
    expect(wallet.find('.wallet__balance').text()).toEqual('Wallet balance: 0');
  });
  
  it('should create an input to deposit/withdraw', () => {
    expect(wallet.find('.wallet__input').exists()).toBe(true);
  });

  describe('when the user types intp the wallet input', () => {
    const transaction = '25';

    beforeEach(() => {
      wallet.find('.wallet__input')
        .simulate('change', { target: { value: transaction } });
    });

    it('should update the local wallet state', () => {
      expect(wallet.state().transaction).toEqual(parseInt(transaction, 10));
    });
    
    describe('and the user wants to make a deposit', () => {
      beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

      it('should dispatch the deposit() it reveives from props', () => {
        expect(mockDeposit).toHaveBeenCalledWith((parseInt(transaction, 10)));
      });
    });

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

      it('should dispatch the withdraw() it reveives from props', () => {
        expect(mockWithdraw).toHaveBeenCalledWith((parseInt(transaction, 10)));
      });
    });
  });
});
