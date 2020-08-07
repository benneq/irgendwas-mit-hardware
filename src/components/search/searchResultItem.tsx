import React from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import { ListItem, ListItemText } from '@material-ui/core';


type Props = {
    title: string
    url: string
    tokens: string[]
}

const SearchResultItem: React.FunctionComponent<Props> = (props) => {
    const { title, url, tokens } = props;

    const MyNavLink = React.forwardRef<Link<any>>((navLinkProps: Omit<GatsbyLinkProps<any>, 'to'>, ref) => <Link<any> to={url} {...navLinkProps} ref={ref as any} />);

    return (
        <ListItem button component={MyNavLink}>
            <ListItemText primary={title} secondary={`Treffer: ${tokens.join(', ')}`} />
        </ListItem>
    );
};

export default SearchResultItem;