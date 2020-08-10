import React from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';
import { Index, SerialisedIndexData } from "elasticlunr";
import { Typography, List } from '@material-ui/core';
import SearchResultItem from './searchResultItem';



const SearchResults: React.FunctionComponent<PageProps> = ({ location }) => {
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get('q') || '';

    const data = useStaticQuery<{ siteSearchIndex: { index: SerialisedIndexData<{ title: string, slug: string, tags: string[] }> }}>(graphql`
        query SearchIndexQuery {
            siteSearchIndex {
                index
            }
        }
    `);

    const index = Index.load(data.siteSearchIndex.index);

    const results = index.search(query, { fields: { tags: 1 }, bool: 'AND', expand: true } as any)
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