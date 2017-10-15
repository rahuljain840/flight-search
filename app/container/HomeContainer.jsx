import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from "react-redux";
import Home from '../components/home';
import {search} from '../redux/actions';

class HomeContainer extends Component {
    componentDidMount() {
        
    }
    searchFlight = () => {
        this.props.searchFlights("Sun Oct 02 2017 15:51:13 GMT+0530 (IST)", "Sun Oct 18 2017 15:51:13 GMT+0530 (IST)", "PNQ", "DEL", false);
    }
    render() {
        console.log("in renderrr", this.props.flights);
        return(
            <Home searchFlight={this.searchFlight} flights={this.props.flights}/>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log("state is---------", state);
    return {
        flights: state.flightReducer.flights
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchFlights: (departureDate, arrivalDate, origin, destination, isRound) => {
            dispatch(search(departureDate, arrivalDate, origin, destination, isRound));
        }
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomeContainer);