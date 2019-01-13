import React from 'react';
import { MenuDetailsHeader } from '.';

it('MenuDetailsHeader renders correctly', () => {
    const wrapper = shallow(
        <MenuDetailsHeader details={{ title: 'test title', subTitle: 'test sub-title' }} />
    )
    expect(wrapper).toMatchSnapshot();
});