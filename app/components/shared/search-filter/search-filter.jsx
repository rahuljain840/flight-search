import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import FilterDate from '../filter-date';
import FilterDropdown from '../filter-dropdown';
import FilterTextbox from '../filter-textbox';

import 'react-datepicker/dist/react-datepicker.css';

class SearchFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            originCity: "",
            destinationCity: "",
            departureDate: "",
            returnDate: "",
            passengers: []
        }
    }

    searchFlights = (e) => {
        e.preventDefault();
        this.props.searchFlight();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.searchFlights}>
                    <FilterTextbox placeholderText="Enter Origin City" city={this.state.originCity} />
                    <FilterTextbox placeholderText="Enter Destination City" city={this.state.destinationCity} />
                    <FilterDate placeholderText="Departure Date" minDate={moment()} />
                    <FilterDate placeholderText="Return Date" minDate={this.state.departureDate} />
                    <FilterDropdown placeholderText="Passengers" passengers={this.state.passengers} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default SearchFilter