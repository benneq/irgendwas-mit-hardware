import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { ListItem, ListItemText, makeStyles, Collapse, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons';
import NavigationList from './NavigationList';



const useStyles = makeStyles(theme => ({
    active: {
        backgroundColor: theme.palette.action.selected,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

type Props = {
    text: string
    to?: string
    nested?: boolean
    children?: any[]
}

const NavigationItem: React.FunctionComponent<Props> = (props) => {
    const { text, to, nested, children } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const MyNavLink = React.forwardRef<HTMLAnchorElement>((navLinkProps: Omit<NavLinkProps, 'to'>, ref) => <NavLink to={to || ''} activeClassName={classes.active} {...navLinkProps} ref={ref} />);

    return (
        <>
            <ListItem button
                component={to ? MyNavLink : 'div'}
                className={nested ? classes.nested : undefined}
            >
                <ListItemText primary={text} />
                {children &&
                    <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={handleClick}>
                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </ListItemSecondaryAction>
                }
            </ListItem>
            {children &&
                <Collapse in={open}>
                    <NavigationList component="div" value={children} nested />
                </Collapse>
            }
        </>
    )
};

export default NavigationItem;
