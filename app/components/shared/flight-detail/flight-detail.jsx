import React, { Component } from 'react';
import { render } from 'react-dom';

const FlightDetail = (props) => (
    <div className="flight-details">
        <div>{props.flight.number}</div>
        <div>{props.flight.route}</div>
        <div>{props.flight.departure}</div>
        <div>{props.flight.arrival}</div>
    </div>
);

export default FlightDetail