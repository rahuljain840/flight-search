import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchFilter from '../shared/search-filter';
import ExtendedSearch from '../shared/extended-search';

class Search extends Component {
    render() {
        return (
            <div>
                <SearchFilter searchFlight={this.props.searchFlight} />
                <ExtendedSearch min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    marks={this.props.marks}
                    sliderChange={this.props.sliderChange} />
            </div>
        );
    }
}

export default Search