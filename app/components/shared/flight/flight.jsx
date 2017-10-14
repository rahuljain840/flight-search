import React, { Component } from 'react';
import { render } from 'react-dom';
import FlightDetail from '../flight-detail';

class Flight extends Component {
    
    render() {
        return (
            <div className="border-box">
                {!this.props.flight ? (<p>No flight details found</p>) : (
                    <div>
                        <div className="flight">
                            <div className="amount">
                                {this.props.flight.source.amount + this.props.flight.destination.amount}
                            </div>
                            <div className="route-details">
                                <FlightDetail flight={this.props.flight.source} />
                                <FlightDetail flight={this.props.flight.destination} />
                            </div>
                        </div>
                        <div className="book-flight">
                            <button onClick="bookFlight">Book this flight</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Flight