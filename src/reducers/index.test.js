import rootReducer from './index';

describe('Root reducer', () => {
  it('should initialize the initial state', () => {
    expect(rootReducer({}, {})).toEqual({
      balance: 0,
      bitcoin: {},
    });
  });
});
