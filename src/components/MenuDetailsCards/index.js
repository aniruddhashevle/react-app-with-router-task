import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './menu-details-cards.scss';

const MenuDetailsCards = ({
    config: {
        title,
        details,
        pinned
    }
}) =>
    <Card className='card-wrapper'>
        <CardContent className="card-content">
            <h4 className="details-title">{title}</h4>
            <p className="details-data">{details}</p>
        </CardContent>
        <Divider />
        <CardActions className="card-action">
            <Button className="card-action-button" color={pinned ? "primary" : "secondary"}>
                {
                    pinned ? 'PIN IT' : 'UNPIN IT'
                }
            </Button>
        </CardActions>
    </Card>

export default MenuDetailsCards;
