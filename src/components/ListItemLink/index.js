import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

const ListItemLink = (props) =>
    <ListItem button component={Link} to={props.href} {...props} />
    //Link component must have 'to' prop, hence specified href from the parent component

export default ListItemLink