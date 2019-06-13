import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as actions from '../actions/balance';

describe('Balance reducer', () => {
  const balance = 10;

  describe('when initializing', () => {
    it('should return default state', () => {
      expect(balanceReducer(undefined, {})).toEqual(0);
    });
    
    it('should set a balance', () => {
      expect(balanceReducer(undefined, actions.setBalance(balance))).toEqual(balance);
    });
  
    describe('when re-initializing ', () => {
      it('should read the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });
  


  it('should deposit into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, actions.deposit(deposit))).toEqual(initialState + deposit);
  });

  it('should withdraw from the balance', () => {
    const withdrawal = 5;
    const initialState = 10;

    expect(balanceReducer(initialState, actions.withdraw(withdrawal)))
      .toEqual(initialState - withdrawal);
  });
});
