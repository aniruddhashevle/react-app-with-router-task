import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from '../ListItemLink';
import './menu-list.scss';

const MenuList = ({ menuConfig = [] }) =>
    menuConfig && menuConfig.length &&
    <List className='menu-list'>
        {
            menuConfig.map(({
                id,
                title,
                subTitle,
                route,
                showDivider
            }) =>
                <ListItem key={id}>
                    <ListItemLink href={route} title={title} divider={showDivider}>
                        <h2 className="title">{title}</h2>
                        <p className="description">{subTitle}</p>
                    </ListItemLink>
                </ListItem>

            )
        }
    </List>

export default MenuList
