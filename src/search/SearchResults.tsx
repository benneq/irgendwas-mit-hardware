import React from 'react';
import { useLocation } from 'react-router-dom';



const SearchResults: React.FunctionComponent = () => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get('q');

    return (
        <div>
            Ergebnisse für "{query}":
        </div>
    );
};

export default SearchResults;
