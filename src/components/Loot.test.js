import React from 'react';
import { shallow, mount } from 'enzyme';

import { Loot } from './Loot';

describe('Loot component', () => {
  let loot;
  const mockFetchBitcoin = jest.fn();
  const props = {
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
      console.log(mockFetchBitcoin.mock.calls);
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });
});
