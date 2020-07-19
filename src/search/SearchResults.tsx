import React from 'react';
import { useLocation, NavLink, NavLinkProps } from 'react-router-dom';
import { tokenizeQuery, filterIndex, sortResults } from './search.util';
import { REVERSED_INDEX } from './search-data';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';


const SearchResults: React.FunctionComponent = () => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get('q') || '';
    const searchTokens = tokenizeQuery(query);
    const searchResults = filterIndex(REVERSED_INDEX, searchTokens);
    const sortedResults = sortResults(searchResults);

    return (
        <div>
             <Typography variant="h6">
                Ergebnisse für "{query}":
             </Typography>

            <List>
                {sortedResults.map((result, i) => 
                    <SearchResultItem key={i} url={result.url} tokens={result.tokens} />
                )}
            </List>
        </div>
    );
};

export default SearchResults;



const SearchResultItem: React.FunctionComponent<{ url: string, tokens: string[] }> = (props) => {
    const { url, tokens } = props;

    const MyNavLink = React.forwardRef<HTMLAnchorElement>((navLinkProps: Omit<NavLinkProps, 'to'>, ref) => <NavLink to={url} {...navLinkProps} ref={ref} />);

    return (
        <ListItem button component={MyNavLink}>
            <ListItemText primary={url} secondary={`Treffer: ${tokens.join(', ')}`} />
        </ListItem>
    );
}