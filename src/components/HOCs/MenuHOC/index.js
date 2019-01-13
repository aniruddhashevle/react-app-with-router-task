import React from 'react';
import { MenuDetailsHeader } from '../../MenuDetailsHeader';

export const MenuHOC = (Component, { id, title, subTitle }) =>
    <div className="menu-details-wrapper" id={id}>
        <MenuDetailsHeader details={{ title, subTitle }} />
        <Component />
    </div>