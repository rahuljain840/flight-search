import React, { Component } from 'react';
import { render } from 'react-dom';

import Search from '../search';
import FlightResult from '../flight-result';
import SearchBreadCrumb from '../shared/search-breadcrumb';

class Home extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-3 left-section">
                    <Search
                        searchFlight={this.props.searchFlight}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        marks={this.props.marks}
                        sliderChange={this.props.sliderChange} />
                </div>
                <div className="col-md-9 right-section">
                    <SearchBreadCrumb filters={this.props.filters} />
                    <FlightResult flights={this.props.flights} />
                </div>
            </div>
        );
    }
}

export default Home