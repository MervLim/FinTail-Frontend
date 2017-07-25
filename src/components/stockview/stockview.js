import React, {Component} from 'react';
import { connect } from 'react-redux';
import LineChart from '../chart/lineChart';
import './stocksview.css';
import {Bar, Line} from 'react-chartjs-2';
import moment from 'moment';

import axios from 'axios';


export class stockview extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.result);

  }


// renderStock(){
//   let today = new Date();
//   const dd = today.getDate()-1;
//   const mm = today.getMonth()+1; //January is 0!
//   const yyyy = today.getFullYear();
//   const dateCombine = yyyy+'-'+mm+'-'+dd;
//   let todayFormat =  moment(dateCombine).format('YYYY-MM-DD');
//
//   const hours = today.getHours();
//   const mins = today.getMinutes();
//   const currentTime = String(hours) + String(mins);
//   const newCurrentTime = parseInt(currentTime);
//   console.log(typeof(newCurrentTime));
//
//
//
//
//   console.log(currentTime);
//   let stock = this.props.result[0];
//   if(typeof(stock) == "undefined") {
//     return
//   } else if (typeof(stock) !== "undefined" && newCurrentTime > 430 && newCurrentTime < 2130){
//
//   return (<div id='line-chart'>
//     <p>{stock['Meta Data']['2. Symbol']}</p>
//     <p>{stock['Time Series (1min)'][todayFormat + ' 16:00:00']['2. high']}</p>
//     <p>{stock['Time Series (1min)'][todayFormat + ' 16:00:00']['1. open']}</p>
//     <p>{stock['Time Series (1min)'][todayFormat + ' 16:00:00']['3. low']}</p>
//   </div>)
// } else {
//   return (<div id='line-chart'>
//     <p>{stock['Meta Data']['2. Symbol']}</p>
//     <p>{stock['Time Series (1min)'][todayFormat + currentTime]['2. high']}</p>
//     <p>{stock['Time Series (1min)'][todayFormat + currentTime]['1. open']}</p>
//     <p>{stock['Time Series (1min)'][todayFormat + currentTime]['3. low']}</p>
//   </div>)
// }
// }


renderNews(){
  if (this.props.newsResult.length <= 0) {
    return(
      <div></div>
    )
  } else {
    return this.props.newsResult[0].data.map((item) => {
      return (
        <div>
          <a href = {item.url}>{item.title}</a>
        </div>

      )
    });
  }


}
  render() {

    return (
      <div className='stockView'>
        <LineChart />
        <div id='newsFeed'>{this.renderNews()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    result: state.JSONresult.result,
    newsResult: state.NEWSData.news
  };
}



export default connect(mapStateToProps, null)(stockview);
