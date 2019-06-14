// https://api.coindesk.com/v1/bpi/currentprice.json

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { FETCH_BITCOIN } from '../constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = {
  body: {
    bpi: 'bitcoint price index'
  },
};

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse,
);

describe('Bitcoin thunk', () => {
  it('should create an async action to fetch the bitcoin value', async () => {
    const expectedActions = [
      {
        bitcoin: mockResponse.body,
        type: FETCH_BITCOIN,
      }
    ];

    await store.dispatch(fetchBitcoin())
    
    expect(store.getActions()).toEqual(expectedActions);
  });
});
