import React from 'react';
import MenuDetailsCards from '../MenuDetailsCards';
import { SALES_DETAILS } from '../../config/menu-details';

it('MenuDetailsCards renders correctly', () => {
    const wrapper = shallow(
        <MenuDetailsCards key={1} config={SALES_DETAILS} />
    )
    expect(wrapper).toMatchSnapshot();
});