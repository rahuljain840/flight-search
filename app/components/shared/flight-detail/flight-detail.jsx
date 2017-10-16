import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const FlightDetail = (props) => (
    <div className="flight-details col-md-6">
        <span>{props.flight.number}</span>
        <h5>{props.flight.departurecode} > {props.flight.arrivalcode}</h5>
        <h5>Depart: {props.flight.departuretime}</h5>
        <h5>Arrive: {props.flight.arrivaltime}</h5>
    </div>
);

FlightDetail.propTypes = {
    flight: PropTypes.object
};

export default FlightDetail