import React, {Component} from 'react';
import moment from 'moment';
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

    let todayFormat =  moment(dateCombine).format('YYYY-MM-DD');
    let todayFormat2 =  moment(dateCombine2).format('YYYY-MM-DD');

    const hours = today.getHours();
    const mins = today.getMinutes();
    const currentTime = String(hours) + String(mins);
    const currentTimeOneTwoFormat = String(hours - 12) + ':' + String(mins);
    const intCurrentTime = parseInt(currentTime);

    let stock = this.props.result[0];

    console.log(intCurrentTime);
    console.log(hours);
    console.log(todayFormat2 + ' ' + currentTimeOneTwoFormat + ':00');


    if(typeof(stock) == "undefined") {
      return
    } else if (typeof(stock) !== "undefined" && intCurrentTime > 430 && intCurrentTime < 2130){
      console.log(stock['0']['Time Series (1min)'][todayFormat + ' 14:45:00']['1. open']);
      let chartData = {
         labels: ['0930H','1000H','1030H'],
         datasets:[
           {
             label: stock['0']['Meta Data']['2. Symbol'],
             data:[
               stock['0']['Time Series (1min)'][todayFormat + ' 14:45:00']['1. open'],
               stock['0']['Time Series (1min)'][todayFormat + ' 14:50:00']['4. close'],
               stock['0']['Time Series (1min)'][todayFormat + ' 14:55:00']['4. close']
              //  stock['Time Series (1min)'][todayFormat + ' 15:00:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:10:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:15:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:20:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:25:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:30:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:35:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:40:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:45:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:50:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 15:55:00']['4. close'],
              //  stock['Time Series (1min)'][todayFormat + ' 16:00:00']['4. close']

             ],
             backgroundColor:[
               'rgba(0, 0, 0, 0)'
             ],
             pointBorderWidth: 3,
           }]
       }
    return (<div>
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
       labels: ['1000H','1200H', '1400H', '1600H' , '1600H', '1600H', '1600H', '1600H', '1600H', '1600H', '1600H'],
       datasets:[
         {
           label: stock['Meta Data']['2. Symbol'],
           data:[
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-1)+ ':00']['1. open'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-2)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-3)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-4)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-5)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-6)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-7)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-8)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-9)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-10)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-11)+ ':00']['4. close'],
             stock['Time Series (1min)'][todayFormat2 + (parseInt(currentTimeOneTwoFormat)-12)+ ':00']['4. close']

           ],
           backgroundColor:[
             'rgba(0, 0, 0, 0)'
           ],
           pointBorderWidth: 3,
         }]
     }

    return (<div>
      {stock['Meta Data']['2. Symbol']}
      {stock['Time Series (1min)'][todayFormat2 + ' ' + currentTimeOneTwoFormat + ':00']['2. high']}
      {stock['Time Series (1min)'][todayFormat2 + ' ' + currentTimeOneTwoFormat + ':00']['4. close']}
      {stock['Time Series (1min)'][todayFormat2 + ' ' + currentTimeOneTwoFormat + ':00']['3. low']}
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
