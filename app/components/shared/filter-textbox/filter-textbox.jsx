import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const FilterTextbox = (props) => (
    <input type="text" className="form-control" placeholder={props.placeholderText} value={props.city} />
);

FilterTextbox.propTypes = {
    placeholderText: PropTypes.string,
    city: PropTypes.string
};

export default FilterTextbox