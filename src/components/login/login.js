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

  render() {
    return (
      <div className="login">
        <div className='login-form'>
          <p className='pull-center'>FinTail</p>
          <hr/>
          <input type="email" name="email" id="email" className='login-field' placeholder="Email Address" />
          <input type="password" name="password" id="password" className='login-field' placeholder="Password" />
          <button  onClick={this.localLogin}>Log in</button>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);
