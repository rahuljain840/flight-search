import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FilterDate from '../filter-date';
import FilterDropdown from '../filter-dropdown';
import FilterTextbox from '../filter-textbox';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-tabs/style/react-tabs.css';

class SearchFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            originCity: "",
            destinationCity: "",
            departureDate: null,
            returnDate: null,
            isRound: false
        }
    }

    setOrigin = (e) => {
        this.setState({ originCity: e.target.value });
    }

    setDestination = (e) => {
        this.setState({ destinationCity: e.target.value });
    }

    setDepartureDate = (departureDate) => {
        this.setState({ departureDate: departureDate });
    }

    setReturnDate = (returnDate) => {
        this.setState({ returnDate: returnDate });
    }

    searchFlights = (e) => {
        e.preventDefault();

        var filters = {
            departureDate: this.state.departureDate,
            arrivalDate: this.state.returnDate,
            origin: this.state.originCity,
            destination: this.state.destinationCity,
            isRound: this.state.isRound
        }

        this.props.searchFlight(filters);
    }

    handleSelect = (index, last) => {
        this.setState({isRound: index == 1});
    }

    render() {
        return (
            <div className="row col-md-12 search-filter">
                <Tabs onSelect={this.handleSelect}>
                    <TabList>
                        <Tab>One way</Tab>
					    <Tab>Round Trip</Tab>
				    </TabList>
                    <TabPanel>
                        <form onSubmit={this.searchFlights}>                            
                            <FilterTextbox placeholderText="Enter Origin City" value={this.state.originCity} onChange={this.setOrigin} />                            
                            <FilterTextbox placeholderText="Enter Destination City" value={this.state.destinationCity} onChange={this.setDestination} />
                            <FilterDate placeholderText="Departure Date" minDate={moment()} selectedDate={this.state.departureDate} onChange={this.setDepartureDate} />
                            <FilterDropdown placeholderText="Passengers" passengers={this.state.passengers} />
                            <input type="submit" value="Search" className = "btn"/>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form onSubmit={this.searchFlights}>
                            <FilterTextbox placeholderText="Enter Origin City" value={this.state.originCity} onChange={this.setOrigin} />
                            <FilterTextbox placeholderText="Enter Destination City" value={this.state.destinationCity} onChange={this.setDestination} />
                            <FilterDate placeholderText="Departure Date" minDate={moment()} selectedDate={this.state.departureDate} onChange={this.setDepartureDate} />
                            <FilterDate placeholderText="Return Date" minDate={this.state.departureDate} selectedDate={this.state.returnDate} onChange={this.setReturnDate} />
                            <FilterDropdown placeholderText="Passengers" passengers={this.state.passengers} />
                            <input type="submit" value="Search" className = "btn" />
                        </form>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default SearchFilter