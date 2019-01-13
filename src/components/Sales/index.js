import React from 'react';
import MenuDetailsCards from '../MenuDetailsCards';
import { SALES_DETAILS } from '../../config/menu-details';

const Sales = () =>
    SALES_DETAILS && SALES_DETAILS.length &&
    SALES_DETAILS.map(item =>
        <MenuDetailsCards config={item} />
    )

export default Sales;
