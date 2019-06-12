import * as constants from '../constants';
import * as actions from './balance';

describe('Actioons', () => {
  it('should create an action to set the balance', () => {
    const balance = 0;
    
    const expectedAction = {
      type: constants.SET_BALANCE,
      balance,
    };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
  });
});
