import { SET_BALANCE } from '../constants';

export const setBalance = balance => ({
  type: SET_BALANCE,
  balance,
});
