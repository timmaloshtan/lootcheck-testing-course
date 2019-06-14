import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../constants';

describe('Bitcoin reducer', () => {
  const btcData = { bpi: 'bitcoin price index' };

  it('should fetch and set bitcoin data', () => {
    expect(bitcoinReducer({}, {
      type: FETCH_BITCOIN,
      bitcoin: btcData,
    })).toEqual(btcData);
  });
});
