import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Search from '../search/search';
import { connect } from 'react-redux';
import Stockview from '../stockview/stockview';
import Networth from '../networth/networth';
import {getDashboard} from '../../actions/userAction'
import './dashboard.css'


export class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      lineChart:{},
      doughnutChart:{}
    }
  }
  componentDidMount() {
    getDashboard();
  }
  render() {
    console.log('you are  in dashoard', this.props)
    return (
      <div>
      <header id='navBar'><p><span>Blood</span>Hound - Your portfolio at a glance</p>
             <Link to ='/'>  <div className="nav-login pull-right" onClick={this.execLogout}>LogOut</div></Link>

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
    user: state.UserReducer,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDashboard:(doughnutChart,lineChart)=>{dispatch(getDashboard(doughnutChart,lineChart));},
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
