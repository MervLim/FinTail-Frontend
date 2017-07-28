import React, {Component} from 'react';
import Search from '../search/search';
import Stockview from '../stockview/stockview';
import { connect } from 'react-redux';

import Networth from '../networth/networth';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { localLogout } from '../../actions/userAction';
import './dashboard.css'



//{this.props.user._id ? <Link to='/' className="nav-login pull-right" onClick={this.logout}>Logout</Link> :
  //  <Link to='/'>className="nav-login pull-right">Login</Link>

export class dashboard extends Component {
  constructor(props) {
    super(props);
  }
 logout(){
   this.props.Logout();
 }
  render() {
    return (
      <div>
      <header id='navBar'><p><span>Blood</span>Hound - Your portfolio at a glance</p></header>
      <div className="nav-login pull-right">Login</div>
      <Search />
      <div className='dashboard'>
      <Networth />
      <Stockview
          linechart={this.props.result}
          doughnutchart={this.props.doughnutch}
        />
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
    Logout: () => {dispatch(localLogout());}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
