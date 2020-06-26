import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    active: {
        backgroundColor: theme.palette.action.selected,
    },
}));

type Props = {
    text: string
    to: string
}

const NavigationItem: React.FunctionComponent<Props> = (props) => {
    const classes = useStyles();

    const MyNavLink = React.forwardRef<HTMLAnchorElement>((navLinkProps: Omit<NavLinkProps, 'to'>, ref) => <NavLink to={props.to} activeClassName={classes.active} {...navLinkProps} ref={ref} />);

    return (
        <ListItem button component={MyNavLink}>
            <ListItemText primary={props.text} />
        </ListItem>
    );
};

export default NavigationItem;