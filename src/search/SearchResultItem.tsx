import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';


type Props = {
    title: string
    url: string
    tokens: string[]
}

const SearchResultItem: React.FunctionComponent<Props> = (props) => {
    const { title, url, tokens } = props;

    const MyNavLink = React.forwardRef<HTMLAnchorElement>((navLinkProps: Omit<NavLinkProps, 'to'>, ref) => <NavLink to={url} {...navLinkProps} ref={ref} />);

    return (
        <ListItem button component={MyNavLink}>
            <ListItemText primary={title} secondary={`Treffer: ${tokens.join(', ')}`} />
        </ListItem>
    );
};

export default SearchResultItem;