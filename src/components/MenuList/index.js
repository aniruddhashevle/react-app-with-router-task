import React from 'react';
import List from '@material-ui/core/List';
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
                <ListItemLink href={route} id={id} title={title} divider={showDivider}>
                    <h2 className="title">{title}</h2>
                    <p className="sub-title">{subTitle}</p>
                </ListItemLink>

            )
        }
    </List>

export default MenuList
