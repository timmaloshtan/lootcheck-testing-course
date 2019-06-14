import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App component', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should contain a connected Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
  
  it('should contain a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });

  it('should contain a link to coindesk', () => {
    expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
  });
});
