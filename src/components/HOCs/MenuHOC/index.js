import React from 'react';
import { MenuDetailsHeader } from '../../MenuDetailsHeader';

export const MenuHOC = (Component, { title, subTitle }) =>
    <div className="menu-details-wrapper">
        <MenuDetailsHeader details={{ title, subTitle }} />
        <Component />
    </div>