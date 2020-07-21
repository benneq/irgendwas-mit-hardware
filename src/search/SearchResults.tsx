import React from 'react';
import { useLocation } from 'react-router-dom';
import { tokenizeQuery, filterIndex, sortResults } from './search.util';
import { REVERSED_INDEX } from './search-data';
import { List, Typography } from '@material-ui/core';
import SearchResultItem from './SearchResultItem';
import { ROUTES } from '../layout/routes-data';


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
                    <SearchResultItem key={i} title={ROUTES[result.url].title} url={result.url} tokens={result.tokens} />
                )}
            </List>
        </div>
    );
};

export default SearchResults;