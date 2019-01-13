import React from 'react';
import Home from '../Home';

it('Home renders correctly', () => {
    const wrapper = shallow(
        <Home />
    )
    expect(wrapper).toMatchSnapshot();
});