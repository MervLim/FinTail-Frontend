import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import { localLogin } from '../../actions/userAction';

// import css
import './login.css';

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }
  onChange = (e) => {
    let state = this.state;
    let key = e.target.name;
    let value = e.target.value;

    state[key] = value;
    console.log("Login State: "  + state);
    this.setState(state);
  }

  localLogin = (e) => {
    if (this.state.email == "" || this.state.password == "") {
    e.preventDefault();
    } else {
      this.props.Login(this.state);
    }
  }

  enterKeyPress = (e) => {
    if(e.charCode==13){
      if (this.state.email == "" || this.state.password == "") {
      e.preventDefault();
      } else {
        this.props.Login(this.state);
      }
    }
  }


  render() {
    return (
      <div className="login">
        <div className='login-form'>
          <p className='pull-center'>FinTail</p>
          <hr/>
          <input type="email" name="email" id="email" className='login-field' placeholder="Email Address" onChange={this.onChange} />
          <input type="password" name="password" id="password" className='login-field' placeholder="Password" onChange={this.onChange} onKeyPress={this.enterKeyPress}/>
          <button onClick={this.localLogin}>Log in</button>
          <hr/>
          <Link to='/signup'><button  onClick={this.onChange}>Sign Up</button></Link>
          <Link to='/'><button onClick={this.onChange}>Back</button></Link>
          <hr/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     Login: (credentials) => {dispatch(localLogin(credentials));},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);
