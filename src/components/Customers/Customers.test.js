import React from 'react';
import Customers from '../Customers';

it('Customers renders correctly', () => {
  const wrapper = shallow(
    <Customers />
  )
  expect(wrapper).toMatchSnapshot();
});