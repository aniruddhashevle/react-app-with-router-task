import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from '../ListItemLink';

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
                <ListItem divider={showDivider}>
                    <ListItemLink href={route} id={id} title={title}>
                        <h2 className="title">{title}</h2>
                        <p className="sub-title">{subTitle}</p>
                    </ListItemLink>
                </ListItem>

            )
        }
    </List>

export default MenuList
