import React, { Component } from 'react';
import { render } from 'react-dom';
import Flight from '../shared/flight';

class FlightResult extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    {
                        this.props.flights.map((flight, index) => <Flight key={index} flight={flight} />)
                    }                    
                </div>
            </div>
        );
    }
}

export default FlightResult