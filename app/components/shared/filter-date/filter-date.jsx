import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const FilterDate = (props) => (
    <input type="text" className="form-control" placeholder={props.placeholderText} value={props.city} />
);

FilterDate.propTypes = {
    placeholderText: PropTypes.string,
    date: PropTypes.string
};

export default FilterDate