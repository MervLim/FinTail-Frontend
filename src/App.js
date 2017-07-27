import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
