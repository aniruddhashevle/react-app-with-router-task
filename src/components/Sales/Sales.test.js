import React from 'react';
import Sales from '../Sales';

it('Sales renders correctly', () => {
    const wrapper = shallow(
        <Sales />
    )
    expect(wrapper).toMatchSnapshot();
});