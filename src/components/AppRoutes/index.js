import React from 'react';
import { Switch, Route } from 'react-router';
import MENU_MAPPING from '../../config/menu-mapping';
import Home from '../Home';
import NoMatch from '../NoMatch';
import { MenuHOC } from '../HOCs/MenuHOC';


const AppRoutes = ({ menuConfig = [] }) =>
    <Switch>
        <Route exact path="/" component={Home} />
        {
            menuConfig && menuConfig.length &&
            menuConfig.map(({
                id,
                title,
                subTitle,
                route,
                component
            }, index) =>
                <Route id={index} path={route} component={() => MenuHOC(MENU_MAPPING[component], {id, title, subTitle})} />
            )
        }
        <Route component={NoMatch} />
    </Switch>

export default AppRoutes;