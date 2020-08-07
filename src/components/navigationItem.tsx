import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import { ListItem, ListItemText, makeStyles, Collapse, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons';
import NavigationList from './navigationList';



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

    const MyNavLink = React.forwardRef<Link<any>>((navLinkProps: Omit<GatsbyLinkProps<any>, 'to'>, ref) => <Link<any> to={to || ''} activeClassName={classes.active} {...navLinkProps} ref={ref as any} />);

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
