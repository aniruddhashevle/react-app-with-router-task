import React from 'react';
import { HOME_MENUS } from '../../config/home-menus';
import MenuList from '../MenuList';

const Home = () =>
    <div className="home-wrapper">
        <h1>Konigle</h1>
        <MenuList menuConfig={HOME_MENUS} />
    </div>

export default Home;
