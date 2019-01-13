import React from 'react';
import { HOME_MENUS } from '../../config/home-menus';
import MenuList from '../MenuList';

const Home = () =>
    <div className="home-wrapper">
        <MenuList menuConfig={HOME_MENUS} />
    </div>

export default Home;
