import React, { Component } from 'react';
import PropTypes from "prop-types";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { render } from 'react-dom';

const FilterDate = (props) => (
    <DatePicker
        selected={props.selectedDate}
        minDate={props.minDate}
        placeholderText={props.placeholderText}
    />
);

FilterDate.propTypes = {
    placeholderText: PropTypes.string
    // minDate: PropTypes.instanceOf(Date),
    // selectedDate: PropTypes.instanceOf(Date)
};

export default FilterDate