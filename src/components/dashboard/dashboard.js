import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Search from '../search/search';
import { connect } from 'react-redux';
import Stockview from '../stockview/stockview';
import Networth from '../networth/networth';
import './dashboard.css'


export class dashboard extends Component {
  constructor(props) {
    super(props);
  }
execLogout(){
  window.location.href = "/"
}
  render() {
    console.log('you are  in dashoard', this.props)
    return (
      <div>
      <header id='navBar'><p><span>Blood</span>Hound - Your portfolio at a glance</p>
             <button>  <div className="nav-login pull-right" onClick={this.execLogout}>LogOut</div></button>
      </header>
      <Search />
      <div className='dashboard'>
      <p>{this.props.username}</p>
      <Stockview />
      <Networth />
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer
  }
}



export default connect(mapStateToProps, null)(dashboard);
