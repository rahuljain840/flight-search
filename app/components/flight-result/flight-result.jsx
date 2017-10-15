import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBreadCrumb from '../shared/search-breadcrumb';
import Flight from '../shared/flight';

class FlightResult extends Component {
    render() {
        return (
            <div className="wraper">
                <div className="row">
                    <SearchBreadCrumb />
                </div>

                <div className="row" id="content">
                    {
                        this.props.flights.map((flight, index) => <Flight key={index} flight={flight} />)
                    }
                </div>
            </div>
        );
    }
}

export default FlightResult