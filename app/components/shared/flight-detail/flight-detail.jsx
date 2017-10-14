import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const FlightDetail = (props) => (
    <div className="flight-details">
        <div>{props.flight.number}</div>
        <div>{props.flight.route}</div>
        <div>{props.flight.departure}</div>
        <div>{props.flight.arrival}</div>
    </div>
);

FlightDetail.propTypes = {
    flight: PropTypes.object
};

export default FlightDetail