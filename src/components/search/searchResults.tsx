import React from 'react'
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import { Typography, List } from '@material-ui/core';
import SearchResultItem from './searchResultItem';
import { Index } from "elasticlunr"


const SearchResults: React.FunctionComponent<PageProps> = ({ location }) => {
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get('q') || '';

    const data = useStaticQuery(graphql`
        query SearchIndexQuery {
            siteSearchIndex {
                index
            }
        }
    `);

    const index = Index.load<{ title: string, slug: string, tags: string[] }>(data.siteSearchIndex.index);

    const results = index.search(query, {})
        .map(result => index.documentStore.getDoc(result.ref));

    return (
        <div>
             <Typography variant="h6">
                Ergebnisse für "{query}":
             </Typography>

            <List>
                {results.map((result, i) => 
                    <SearchResultItem key={i} title={result.title} url={result.slug} tokens={result.tags} />
                )}
            </List>
        </div>
    )
}

export default SearchResults;