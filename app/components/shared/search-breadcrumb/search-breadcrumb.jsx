import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const SearchBreadCrumb = (props) => (
    <div className="breadcrumbWrapper">
        {props.filters ?
            (
                <div className="row">
                    <div className="col-md-5 breadcrumb-title">
                        <h3>
                        {
                            props.filters.isRound ?
                                (`${props.filters.origin} > ${props.filters.destination} > ${props.filters.origin}`) :
                                (`${props.filters.origin} > ${props.filters.destination}`)
                        }
                        </h3>
                    </div>
                    <div className="col-md-7">
                        <div className="row"><b>Departure: {props.filters.departure}</b></div>
                        <div className="row"><b>Arrival: {props.filters.return}</b></div>
                    </div>
                </div>
            ) :
            (<div></div>)}
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