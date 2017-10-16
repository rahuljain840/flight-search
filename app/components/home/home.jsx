import React, { Component } from 'react';
import { render } from 'react-dom';

import Search from '../search';
import FlightResult from '../flight-result';

class Home extends Component {

    render() {
        return (
            <div className="col-sm-12">
                <div className="col-sm-3">
                    <Search searchFlight={this.props.searchFlight}/>
                </div>
                <div className="col-sm-9">
                    <FlightResult flights={this.props.flights}/>
                </div>
            </div>
        );
    }
}

export default Home