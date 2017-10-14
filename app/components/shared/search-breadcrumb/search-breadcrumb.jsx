import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const SearchBreadCrumb = (props) => (
    <div>
        <div>
            {
                props.isRound ?
                    `${props.origin} > ${props.destination} > ${props.origin}` :
                    `${props.origin} > ${props.destination}`
            }
        </div>
        <div>
            <span>Depart: {props.departure}</span>
            <span>Depart: {props.return}</span>
        </div>
    </div>
);

SearchBreadCrumb.propTypes = {
    isRound: PropTypes.bool,
    origin: PropTypes.string,
    destination: PropTypes.string,
    departure: PropTypes.string,
    return: PropTypes.string
};

export default SearchBreadCrumb