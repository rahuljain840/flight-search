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
                    <Search searchFlight={this.props.searchFlight} />
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