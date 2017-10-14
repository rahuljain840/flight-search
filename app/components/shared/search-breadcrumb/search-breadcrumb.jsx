import React, { Component } from 'react';
import { render } from 'react-dom';

const SearchBreadCrumb = (props) => (
    <div>
        {props.isRound ? (props.origin > props.destination > props.origin) : (props.origin > props.destination)}
    </div>
);

export default SearchBreadCrumb