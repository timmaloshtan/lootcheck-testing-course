import React from 'react';
import { shallow, mount } from 'enzyme';

import { Loot } from './Loot';

describe('Loot component', () => {
  let loot;
  const mockFetchBitcoin = jest.fn();
  let props = {
    balance: 10,
    bitcoin: {},
    fetchBitcoin: mockFetchBitcoin,
  };
  loot = shallow(<Loot {...props}/>);

  it('should render correctly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounting', () => {
    beforeEach(() => {
      mockFetchBitcoin.mockClear();
      loot = mount(<Loot {...props} />);
    });

    it('should dispatch fetchBitcoin() from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid btc props', () => {
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: {
          bpi: {
            USD: {
              rate: '1,000'
            }
          }
        }
      };
      loot = shallow(<Loot {...props} />, {
        disableLifecycleMethods: true,
      });

    });

    it('should display correct btc value', () => {
      expect(loot.find('h3').text()).toEqual('BTC balance: 0.01');
    });
  });
});
