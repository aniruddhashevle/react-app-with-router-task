import React from 'react';
import Divider from '@material-ui/core/Divider';
import { HOME_MENUS } from '../../config/home-menus';
import MenuList from '../MenuList';
import './home.scss';

const Home = () =>
    <div className="home-wrapper">
        <h1 className="brand-logo">Konigle</h1>
        <Divider />
        <MenuList menuConfig={HOME_MENUS} />
    </div>

export default Home;
