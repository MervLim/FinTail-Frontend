import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  withRouter
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

    console.log(this.props);
    const isLoggedIn = this.props.user.isSignedI;

    const PrivateRoute = ( {component: Component , authed ,...rest}) => {
      console.log(authed.isAuth)
      return (
     <Route {...rest} render={props => (
          authed.isAuth?
         <Component {...props}/>
        : (
         <Redirect to={{
           pathname: '/login',
           state: { from: props.location }
         }} />
       )
     )} />
   )
 }

    return (
      <div className="App">
      <Router>
      <Route render={({location, history, match}) => {
        console.log(this.props)
        return (
          <RouteTransition
             pathname={location.pathname}
             atEnter={{ opacity: 0 }}
             atLeave={{ opacity: 0 }}
             atActive={{ opacity: 1 }}
           >
          <Switch key={location.key} location={location}>
          <div>
          <ul>
          <li><Link to="/">Public</Link></li>
          <li><Link to="/dashboard">Protected</Link></li>
          </ul>
          <Route exact path="/"  component={LogIn} />
          <Route path="/signup" component={SignUp} history={history}/>
          <PrivateRoute path='/dashboard' authed={this.props.user}  component= {Dashboard} />
            </div>
          </Switch>
          </RouteTransition>
        );
        }}/>
    </Router>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer
  }
}

export default connect(mapStateToProps, null)(App);
