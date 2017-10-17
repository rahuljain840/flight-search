import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';
import moment from 'moment';

const SearchBreadCrumb = (props) => (
    <div className="breadcrumbWrapper">
        {props.filters ?
            (
                <div className="row">
                    <div className="col-md-5 breadcrumb-title">
                        <h3>
                        {
                            props.filters.isRound ?
                                (`${props.filters.origin.toUpperCase()} > ${props.filters.destination.toUpperCase()} > ${props.filters.origin.toUpperCase()}`) :
                                (`${props.filters.origin.toUpperCase()} > ${props.filters.destination.toUpperCase()}`)
                        }
                        </h3>
                    </div>
                    <div className="col-md-7">                        
                        <div className="row breadcrumb-title"><b>Departure: {moment(props.filters.departureDate).format('DD MMM YYYY')}</b></div>
                        {props.filters.isRound ? 
                        <div className="row"><b>Arrival: {moment(props.filters.arrivalDate).format('DD MMM YYYY')}</b></div> : 
                        <div />
                    }
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