import React, {Component} from 'react';
import *  as storeDashboard from '../../actions/searchActions';
import { connect } from 'react-redux';
import LineChart from '../chart/lineChart';
import DoughnutChart from '../chart/doughnutChart';
import NewsFeed from '../newsfeed/newsfeed';
import './stockview.css';
import {Bar, Line} from 'react-chartjs-2';
import moment from 'moment';
import uuid from 'uuid';
import axios from 'axios';

import { deleteUserPreferenceAjax} from '../../actions/searchActions';



export class stockview extends Component {
  constructor(props) {
    super(props);
  }

removeUserPreference = (e) => {
  console.log("USER PREFERENCE@STOCKVIEW", this.state.result);
   this.props.removePreference(this.state.result);
}
  render() {
    return (
      <div className='stockView'>
        <div><LineChart /></div>
        <div id='doughnutChart'><DoughnutChart /></div>
           <button>  <div className="nav-login pull-right" onClick={this.removeUserPreference}>Test</div></button>
        <NewsFeed />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    result: state.JSONresult.result,
    newsResult: state.JSONresult.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToDashBoard: (array) => { dispatch(storeDashboard(array)); },
    removePreference:(array) => {dispatch(deleteUserPreferenceAjax(array));}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(stockview);
