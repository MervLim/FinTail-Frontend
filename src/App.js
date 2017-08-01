import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
import {connect} from 'react-redux'
import { RouteTransition } from 'react-router-transition';
import { withRouter } from 'react-router';

import LogIn from './components/login/login';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidUpdate(){

  }

  render() {

    console.log(this.props);
    const isLoggedIn = this.props.user.isSignedIn;
    const PrivateRoute = ( {component: Component , authed ,...rest}) => {
      console.log(authed.isAuth)
      return (
     <Route {...rest} render={props => (
          authed.isAuth?
         <Component {...props}/>
        : (
         <Redirect to={{
           pathname: '/',
           state: { from: props.location }
         }} />
       )
     )} />
   )
 }

    return (
      <div className="App">
      <Router>
      <Switch>
      <Route render={({location, history, match}) => {
        console.log(this.props)
        return (
          <div>
          <ul>
          <li><Link to="/">Public</Link></li>
          <li><Link to="/dashboard">Protected</Link></li>
          </ul>
          <Route exact path="/signup" render= {() => (
              authed.isAuth ? ( <Redirect to="/dashboard"/> ) : ( <Signup/> )
           )} />
            <Route path="/signup" component={SignUp} history={history}/>
            <PrivateRoute authed={this.props.user} path='/dashboard' component= {Dashboard} />
            </div>
        );
        }}/>
    </Switch>
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
