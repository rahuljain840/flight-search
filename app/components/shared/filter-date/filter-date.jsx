import React, { Component } from 'react';
import PropTypes from "prop-types";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { render } from 'react-dom';

class FilterDate extends Component {

    render() {
        return (
            <div className="form-group">
                <DatePicker
                    selected={this.props.selectedDate}
                    minDate={this.props.minDate}
                    onChange={this.props.onChange}
                    placeholderText={this.props.placeholderText}
                    className="form-control"
                />
            </div>
        );
    }
}

FilterDate.propTypes = {
    placeholderText: PropTypes.string
    // minDate: PropTypes.instanceOf(Date),
    // selectedDate: PropTypes.instanceOf(Date)
};

export default FilterDate