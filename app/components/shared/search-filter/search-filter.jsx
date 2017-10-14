import React, { Component } from 'react';
import { render } from 'react-dom';
import FilterDropdown from '../filter-dropdown';
import FilterTextbox from '../filter-textbox';

class SearchFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            originCity: "",
            destinationCity: "",
            departureDate: "",
            returnDate: "",
            passengers: ""
        }
    }

    searchFlights = (e) => {
        e.preventDefault();

        
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <form onSubmit={this.searchFlights}>
                        <FilterTextbox placeholderText="Enter Origin City" city={this.state.originCity} />
                        <FilterTextbox placeholderText="Enter Destination City" city={this.state.destinationCity} />
                        <FilterDropdown placeholderText="Departure Date" options={this.state.departureDate} />
                        <FilterDropdown placeholderText="Return Date" options={this.state.returnDate} />
                        <FilterDropdown placeholderText="Passengers" options={this.state.passengers} />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchFilter