
import React, {Component} from 'react';
import moment from 'moment';
import 'moment-timezone';


import { connect } from 'react-redux';
import {Bar, Line} from 'react-chartjs-2';
import './lineChart.css';


export class lineChart extends Component {
  constructor(props) {
    super(props);
  }

  renderStock(){
    let today = new Date();
    const dd = today.getDate()-1;
    const dd2 = today.getDate();
    const mm = today.getMonth()+1; //January is 0!
    const yyyy = today.getFullYear();
    const dateCombine = yyyy+'-'+mm+'-'+dd;
    const dateCombine2 = yyyy+'-'+mm+'-'+dd2;
    const date3  =  moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"]);


    let todayFormat =  moment(dateCombine).format('YYYY-MM-DD');
    console.log("timezoneFormat " + todayFormat);
    let timezone = moment()
    let todayFormat2 =  moment(dateCombine2).format('YYYY-MM-DD');

    const hours = today.getHours();
    const mins = today.getMinutes();
    const currentTime = String(hours) + String(mins);
    const currentTimeTwoFourFormat = String(hours - 12) + ':' + String(mins);
    const intCurrentTime = parseInt(currentTime);
    //Date.now get date .to get today dateCombine'
    //Date.now.setDate()



    let stock = this.props.result[0];
    console.log(todayFormat2 + ' ' + currentTimeTwoFourFormat + ':00');
    console.log(todayFormat + ' 16:00:00');



    if(typeof(stock) == "undefined") {
      return
    } else if (typeof(stock) !== "undefined" && intCurrentTime > 430 && intCurrentTime < 2130){

      let chartData = {
         labels: ['1000H','1200H', '1400H', '1600H' , '1600H', '1600H', '1600H', '1600H', '1600H', '1600H', '1600H'],
         datasets:[
           {
             label: stock['Meta Data']['2. Symbol'],
             data:[
               stock['Time Series (1min)'][todayFormat + ' 15:00:00']['1. open'],
               stock['Time Series (1min)'][todayFormat + ' 15:10:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:15:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:20:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:25:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:30:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:35:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:40:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:45:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:50:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 15:55:00']['4. close'],
               stock['Time Series (1min)'][todayFormat + ' 16:00:00']['4. close']

             ],
             backgroundColor:[
               'rgba(0, 0, 0, 0)'
             ],
             pointBorderWidth: 3,
           }]
       }
    return (
      <div>
      <span className='title'>{stock['Meta Data']['2. Symbol']} - {todayFormat}</span>
      {stock['Time Series (1min)'][todayFormat + ' 16:00:00']['2. high']}
      {stock['Time Series (1min)'][todayFormat + ' 16:00:00']['4. close']}
      {stock['Time Series (1min)'][todayFormat + ' 16:00:00']['3. low']}
      <p><Line data ={chartData}
               width={100}
               height={400}
               options={{maintainAspectRatio: false}}
      /></p>
    </div>)
  } else {

    let chartData = {
       labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
       datasets:[
         {
           label: stock['Meta Data']['2. Symbol'],
           data:[
             617594,
             181045,
             153060,
             106519,
             105162,
             95072
           ],
           backgroundColor:[
             'rgba(0, 0, 0, 0)'
           ]
         }]
     }

    return (<div>
      {stock['Meta Data']['2. Symbol']}
      {stock['Time Series (1min)'][todayFormat + currentTime]['2. high']}
      {stock['Time Series (1min)'][todayFormat + currentTime]['4. close']}
      {stock['Time Series (1min)'][todayFormat + currentTime]['3. low']}
      <p><Line data ={chartData}/></p>
    </div>)
  }
  }


  render() {
    return (<div>{this.renderStock()}</div>);
  }
}




const mapStateToProps = (state) => {
  return{
    result: state.JSONresult.result,
  };
}



export default connect(mapStateToProps, null)(lineChart);
