import React, { Component } from 'react';
import { render } from 'react-dom';

import Search from '../search';
import FlightResult from '../flight-result';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flights: []
        };
    }

    componentDidMount() {
        fetch('/api/flights').then(response => {
            this.setState({ flights: response });
            alert(response);
        }).then(response => {
            console.log(response)
        });
    }

    render() {
        return (
            <div className="wraper">
                <div className="left-section">
                    <Search />
                </div>
                <div className="right-section">
                    <FlightResult />
                </div>
            </div>
        );
    }
}

export default Home