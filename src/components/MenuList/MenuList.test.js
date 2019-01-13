import React from 'react';
import MenuList from '../MenuList';
import { HOME_MENUS } from '../../config/home-menus';

it('MenuList renders correctly', () => {
    const wrapper = shallow(
        <MenuList menuConfig={HOME_MENUS} />
    )
    expect(wrapper).toMatchSnapshot();
});