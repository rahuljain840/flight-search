import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from "prop-types";
import FlightDetail from '../flight-detail';

class Flight extends Component {

    render() {
        let isRound = this.props.flight && this.props.flight.destination;
        return (
            <div className="border-box">
                {this.props.flight ? (
                    <div>
                        <div className="flight">
                            <div className="charges">
                                {isRound ?
                                    this.props.flight.source.charges + this.props.flight.destination.charges
                                    : this.props.flight.source.charges}
                            </div>
                            <div className="route-details">
                                <FlightDetail flight={this.props.flight.source} />
                                {isRound ?
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