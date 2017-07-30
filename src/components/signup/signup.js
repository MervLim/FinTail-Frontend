import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { localSignup } from '../../actions/userAction';

// import css
import './signup.css';

class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: ""
      }
    }
  }

  onChange = (e) => {
    let userState = this.state.user;
    let key = e.target.name;
    let value = e.target.value;
    userState[key] = value;
    this.setState(userState);
    console.log(userState);
  }


  localSignup = (e) => {
    console.log(this.state.user);
    if (this.state.username == "" || this.state.email == "" || this.state.password == "" || this.state.RePassword == "" || this.state.contact == "") {
    //ADD NOTIFICATION
      e.preventDefault();
    } else {
    //ADD NOTIFICATION
    this.props.Signup(this.state.user);
    }
  }

  enterKeyPress = (e) => {
    if(e.charCode==13){
      console.log(this.state.user);
      if (this.state.username == "" || this.state.email == "" || this.state.password == "" || this.state.RePassword == "" || this.state.contact == "") {
      //ADD NOTIFICATION
      } else {
      //ADD NOTIFICATION
      }
    }
  }


  render() {
    return (
      <div className="signup">
        <div className='login-form'>
          <p>Sign up</p>
          <hr/>
          <input type="text" name="username" className='signup-field' id="username" placeholder="User Name" onChange={this.onChange}/>
          <input type="email" name="email" className='signup-field' id="email" placeholder="Email Address" onChange={this.onChange}/>
          <input type="password" name="password" className='signup-field' id="password" placeholder="Password" onChange={this.onChange}/>
          <input type="password" name="repassword" className='signup-field'id="re-password" placeholder="Re-Enter Password" onChange={this.onChange} onKeyPress={this.enterKeyPress}/>


          <button className="LoginBtn" onClick={this.localSignup}>Sign up</button>
          <hr/>
          <Link to='/'><button className="SignUpBtn" onClick={this.onChange}>Home</button></Link>
          <Link to='/login'><button className="BackBtn" onClick={this.onChange}>Back</button></Link>
          <hr/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
     user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Signup: (credentials) => {dispatch(localSignup(credentials));},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(signup);
