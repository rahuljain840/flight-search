import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const FilterDropdown = (props) => (
    <input type="text" className="form-control" placeholder={props.placeholderText} value={props.city} />
);

FilterDropdown.propTypes = {
    placeholderText: PropTypes.string,
    date: PropTypes.string
};

export default FilterDropdown