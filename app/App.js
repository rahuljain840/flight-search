import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Styles from './App.css'
// Import custom components
import Home from './components/home'
import Header from './components/shared/header'
// import 'styles/bootstrap.min.css'
// import 'styles/style.css'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
