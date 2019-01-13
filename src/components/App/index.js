import React from 'react';
import '../assets/styles/main.scss';
import './app.scss';
import AppRoutes from '../AppRoutes';
import { HOME_MENUS } from '../../config/home-menus';

const App = () =>
  <div className="app">
    <AppRoutes menuConfig={HOME_MENUS}/>
  </div>
  
export default App
