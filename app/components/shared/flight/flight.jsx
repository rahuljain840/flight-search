import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from "prop-types";
import FlightDetail from '../flight-detail';

class Flight extends Component {

    render() {
        return (
            <div className="border-box">
                {this.props.flight ? (
                    <div>
                        <div className="flight">
                            <div className="charges">
                                {this.props.isRound ?
                                    this.props.flight.source.amount + this.props.flight.destination.amount
                                    : this.props.flight.source.amount}
                            </div>
                            <div className="route-details">
                                <FlightDetail flight={this.props.flight.source} />
                                {this.props.isRound ?
                                    <FlightDetail flight={this.props.flight.destination} /> :
                                    null}
                            </div>
                        </div>
                        <div className="book-flight">
                            <button onClick="bookFlight">Book this flight</button>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

Flight.propTypes = {
    isRound: PropTypes.bool,
    flight: PropTypes.object
};
export default Flight