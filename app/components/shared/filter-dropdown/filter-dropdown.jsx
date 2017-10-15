import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const FilterDropdown = (props) => (
    <select value={props.passenger}>
        <option value=''>{props.placeholderText}</option>
        {
            [1,2,3,4,5,6,7,8,9].map((option, index) => {
                return <option key={index} value={option}>{option}</option>
            })
        }
    </select>
);

FilterDropdown.propTypes = {
    placeholderText: PropTypes.string,
    passengers: PropTypes.array,
    passenger: PropTypes.number
};

export default FilterDropdown