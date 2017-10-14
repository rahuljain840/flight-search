import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBreadCrumb from '../shared/search-breadcrumb';
import Flight from '../shared/flight';

class FlightResult extends Component {
    render() {
        return (
            <section className="container bg-gray">
                <div className="wraper">
                    <div className="row">
                        <SearchBreadCrumb />
                    </div>

                    <div className="row" id="content">
                        <Flight />
                    </div>
                </div>
            </section>
        );
    }
}

export default FlightResult