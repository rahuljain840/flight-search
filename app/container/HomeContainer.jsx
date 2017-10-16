import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import Home from '../components/home';
import { search } from '../redux/actions';

class HomeContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: null,
            flights: []
        };
    }

    //"Sun Oct 02 2017 15:51:13 GMT+0530 (IST)", "Sun Oct 18 2017 15:51:13 GMT+0530 (IST)", "PNQ", "DEL", false
    searchFlight = (filters) => {
        this.props.searchFlights(filters);

        this.setState({ filters: filters });
        this.setState({ flights: this.props.flights });
    }

    sliderChange = (value) => {
        var flights = this.props.flights.filter((flight) => {
            if (this.state.filters.isRound) {
                if ((flight.source.charges + flight.destination.charges) <= value) {
                    return flight;
                }
            }
            else {
                if (flight.source.charges <= value) {
                    return flight;
                }
            }
        });

        this.setState({ flights: flights });
    }

    render() {
        return (
            <Home searchFlight={this.searchFlight} flights={this.props.flights}
                filters={this.state.filters} sliderChange={this.sliderChange} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flightReducer.flights
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchFlights: (filters) => {
            dispatch(search(filters));
        }
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomeContainer);