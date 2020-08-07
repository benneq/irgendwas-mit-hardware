import React from 'react'
import { PageProps } from 'gatsby';
import { Typography, List } from '@material-ui/core';
import SearchResultItem from './searchResultItem';



const SearchResults: React.FunctionComponent<PageProps> = ({ location }) => {
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get('q') || '';
    // const searchTokens = tokenizeQuery(query);
    // const searchResults = filterIndex(REVERSED_INDEX, searchTokens);
    // const sortedResults = sortResults(searchResults);
    const sortedResults = [];
    const ROUTES = {};


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
    )
}

export default SearchResults;