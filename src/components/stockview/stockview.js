import React, {Component} from 'react';
import *  as storeDashboard from '../../actions/searchActions';
import { connect } from 'react-redux';
import LineChart from '../chart/lineChart';
import DoughnutChart from '../chart/doughnutChart';
import './stockview.css';
import {Bar, Line} from 'react-chartjs-2';
import moment from 'moment';
import uuid from 'uuid';
import axios from 'axios';



export class stockview extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.result);

  this.state = {
    dashboardArr:[]
  }

  }

onClick = (e) => {
  this.state.dashboardArr.push(this.props.result);
  this.state.dashboardArr.push(this.props.newsResult);

}

renderNews(){
  if (this.props.newsResult.length <= 0) {
    return(
      <div></div>
    )
  } else {
    return this.props.newsResult.map((item) => {
      return item[0].data.map((item) => {
        return (
          <div key={uuid.v4()}>
            <a href = {item.url}>{item.title}</a>
            <p>{item.summary}</p>
          </div>

        )
      });
    })
  }


}
  render() {

    return (
      <div className='stockView'>
        <button type='button' id='btnAddPreference' onClick={this.onClick}>Add to dashboard</button>
        <div id='line-chart'><LineChart /></div>
        <div id='newsFeed'>
        {this.renderNews()}
        </div>
        <div id='doughnutChart'><DoughnutChart /></div>


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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(stockview);
