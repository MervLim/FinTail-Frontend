import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux'
import { RouteTransition } from 'react-router-transition';

import LogIn from './components/login/login';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>

      <Route render={({location, history, match}) => {
        return (
          <RouteTransition
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
          <Switch key={location.key} location={location}>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/signup" component={SignUp}/>


          </Switch>
          </RouteTransition>
        );
      }}/>
    </Router>
    </div>
    );
  }
}

export default App;
