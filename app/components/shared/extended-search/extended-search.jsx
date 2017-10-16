import React, { Component } from 'react';
import { render } from 'react-dom';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
class ExtendedSearch extends Component {

    handleChange =(e) => {
        console.log(e);
    }

    render() {
        return (
            <div className="row col-md-12 refine-search">
                <h4>Refine flight search</h4>
                <Slider 
                    min={0} 
                    max={5000}
                    step={500} 
                    marks={{0: 0, 500: 500, 1000:1000, 2000:2000, 3000:3000, 4000:4000, 5000: 5000}} 
                    onChange={this.handleChange} />
            </div>
        );
    }
}

export default ExtendedSearch