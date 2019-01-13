import React from 'react';
import { Switch, Route } from 'react-router';
import MENU_MAPPING from '../../config/menu-mapping';
import Home from '../Home';
import NoMatch from '../NoMatch';


const AppRoutes = ({ menuConfig = [] }) =>
    menuConfig && menuConfig.length &&
    <Switch>
        <Route exact path="/" component={Home} />
        {
            menuConfig.map(({
                route,
                component
            }) =>
                <Route path={route} component={MENU_MAPPING[component]} />
            )
        }
        <Route component={NoMatch} />
    </Switch>

export default AppRoutes;