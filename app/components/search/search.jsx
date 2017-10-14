import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchFilter from '../shared/search-filter';
import ExtendedSearch from '../shared/extended-search';

class Search extends Component {
    render() {
        return (
            <div>
                <h1>Search</h1>
                <SearchFilter />
                <ExtendedSearch />
            </div>
        );
    }
}

export default Search