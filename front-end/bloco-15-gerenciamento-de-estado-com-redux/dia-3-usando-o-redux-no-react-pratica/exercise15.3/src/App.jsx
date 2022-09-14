import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './page/Login';
import Registered from './page/Registered';
import NotFound from './page/NotFound';

export default class App extends Component {
  render() {
    return (
      <>
        <header><Home /></header>
        <Switch>
          <Route exact path="/login" render={ (props) => <Login { ...props } /> } />
          <Route exact path="/registered" component={ Registered } />
          <Route component={ NotFound } />
        </Switch>
      </>
    );
  }
}
