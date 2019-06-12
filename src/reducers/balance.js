import * as constants from '../constants';

export default (state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    default:
      return state;
  }
}