import React from 'react';
import Divider from '@material-ui/core/Divider';
import './menu-details-header.scss'

export const MenuDetailsHeader = ({details: { title, subTitle }}) =>
    <div className="menu-details-header">
        <h2 className="title">{title}</h2>
        <p className="description">{subTitle}</p>
        <Divider />
    </div>