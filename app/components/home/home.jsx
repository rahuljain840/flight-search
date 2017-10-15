import React, { Component } from 'react';
import { render } from 'react-dom';

import Search from '../search';
import FlightResult from '../flight-result';

class Home extends Component {

    render() {
        return (
            <div className="wraper">
                <div className="left-section">
                    <Search searchFlight={this.props.searchFlight}/>
                </div>
                <div className="right-section">
                    <FlightResult flights={this.props.flights}/>
                </div>
            </div>
        );
    }
}

export default Home