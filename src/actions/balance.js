import { SET_BALANCE, DEPOSIT, WITHDRAW } from '../constants';

export const setBalance = balance => ({
  type: SET_BALANCE,
  balance,
});

export const deposit = deposit => ({
  type: DEPOSIT,
  deposit,
});

export const withdraw = withdrawal => ({
  type: WITHDRAW,
  withdrawal,
});
