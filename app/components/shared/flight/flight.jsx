import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from "prop-types";
import FlightDetail from '../flight-detail';

class Flight extends Component {

    render() {
        let isRound = !!(this.props.flight && this.props.flight.destination);
        return (
            <div className="flightWrapper">
                {this.props.flight ? (
                    <div className="row">
                        <div className="flight col-md-10">
                            <div className="charges row col-md-12">
                                <h2> Rs.&nbsp;
                                {isRound ?
                                    this.props.flight.source.charges + this.props.flight.destination.charges
                                    : this.props.flight.source.charges}
                                </h2>
                            </div>
                            <div className="route-details row">
                                <FlightDetail flight={this.props.flight.source} />
                                {isRound ?
                                    <FlightDetail flight={this.props.flight.destination} /> :
                                    null}
                            </div>
                        </div>
                        <div className="book-flight col-md-2">
                            <button onClick={this.bookFlight}>Book flight</button>
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