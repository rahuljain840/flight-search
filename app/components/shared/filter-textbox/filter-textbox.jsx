import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

const FilterTextbox = (props) => (
    <div className="form-group">
        <input type="text" className="form-control" placeholder={props.placeholderText} value={props.value} onChange={props.onChange} />
    </div>
);

FilterTextbox.propTypes = {
    placeholderText: PropTypes.string,
    onChange: PropTypes.func
};

export default FilterTextbox