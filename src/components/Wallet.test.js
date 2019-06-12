import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';

const props = {
  balance: 0,
};

describe('Wallet component', () => {
  const wallet = shallow(<Wallet {...props} />);

  it('should render correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('should display the balance from props', () => {
    expect(wallet.find('.wallet__balance').text()).toEqual('Wallet balance: 0');
  });
  
});
