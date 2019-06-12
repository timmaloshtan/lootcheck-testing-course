import balanceReducer from './balance';
import * as constants from '../constants';
import * as actions from '../actions/balance';

describe('Balance reducer', () => {
  it('should return default state', () => {
    expect(balanceReducer(undefined, {})).toEqual(0);
  });
  
  it('should set a balance', () => {
    const balance = 10;
    expect(balanceReducer(undefined, actions.setBalance(balance))).toEqual(balance);
  });
});
