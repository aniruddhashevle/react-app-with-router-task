import React from 'react';
import MenuDetailsCards from '../MenuDetailsCards';
import { CUSTOMER_DETAILS } from '../../config/menu-details';

const Customers = () =>
    CUSTOMER_DETAILS && CUSTOMER_DETAILS.length &&
    CUSTOMER_DETAILS.map(item =>
        <MenuDetailsCards key={item.id} config={item} />
    )

export default Customers;
