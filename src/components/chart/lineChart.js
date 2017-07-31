import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {Bar, Line} from 'react-chartjs-2';
import './lineChart.css';
import uuid from 'uuid';


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

    let stock = this.props.result;

    console.log(intCurrentTime);


    if(typeof(stock) == "undefined") {
      return
    } else if (typeof(stock) !== "undefined"){
      console.log('im hitting else if!');
      return stock.map((item) => {
        item = item[0]

        let chartData = {
           id: uuid.v4(),
           labels: ['0930H','1000H','1030H', '1100H', '1130H', '1200H', '1230H', '1300H', '1330H', '1400H', '1430', '1500', '1530', '1600H'],
           datasets:[
             {
               label: item['Meta Data']['2. Symbol'],
               data:[
                //  item['Time Series (1min)'][todayFormat + ' 14:45:00']['1. open'],
                //  item['Time Series (1min)'][todayFormat + ' 14:50:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 14:55:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:00:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:10:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:15:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:20:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:25:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:30:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:35:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:40:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:45:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:50:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 15:55:00']['4. close'],
                //  item['Time Series (1min)'][todayFormat + ' 16:00:00']['4. close']
                 item['Time Series (1min)']['2017-07-28' + ' 14:45:00']['1. open'],
                 item['Time Series (1min)']['2017-07-28' + ' 14:50:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 14:55:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:00:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:10:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:15:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:20:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:25:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:30:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:35:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:40:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:45:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:50:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 15:55:00']['4. close'],
                 item['Time Series (1min)']['2017-07-28' + ' 16:00:00']['4. close']

               ],
               backgroundColor:[
                 'rgba(0, 0, 0, 0)'
               ],
               pointBorderWidth: 3,
             }]
         }
         console.log(chartData)
      return (
        <div key={chartData.id} className='line-chart'>
        <span className='title'>{item['Meta Data']['2. Symbol']} - {todayFormat}</span>
        {item['Time Series (1min)']['2017-07-28' + ' 16:00:00']['2. high']}
        {item['Time Series (1min)']['2017-07-28' + ' 16:00:00']['4. close']}
        {item['Time Series (1min)']['2017-07-28' + ' 16:00:00']['3. low']}
        <p><Line data ={chartData}
                 width={100}
                 height={400}
                 options={{maintainAspectRatio: false}}
        /></p>
      </div>)
      })

  } else {
    console.log('im hitting else!');
    return stock.map((item) => {
      item = item[0]

      let chartData = {

         id: uuid.v4(),
         labels: ['0930H','1000H','1030H', '1100H', '1130H', '1200H', '1230H', '1300H', '1330H', '1400H', '1430', '1500', '1530', '1600H'],
         datasets:[
           {
             label: item['Meta Data']['2. Symbol'],
             data:[
               item['Time Series (1min)'][todayFormat + ' 14:45:00']['1. open'],
               item['Time Series (1min)'][todayFormat + ' 14:50:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 14:55:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:00:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:10:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:15:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:20:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:25:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:30:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:35:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:40:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:45:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:50:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 15:55:00']['4. close'],
               item['Time Series (1min)'][todayFormat + ' 16:00:00']['4. close']

             ],
             backgroundColor:[
               'rgba(0, 0, 0, 0)'
             ],
             pointBorderWidth: 3,
           }]
       }
       console.log(chartData)
    return (
      <div key={chartData.id} className='line-chart '>
      <span className='title'>{item['Meta Data']['2. Symbol']} - {todayFormat}</span>
      {item['Time Series (1min)'][todayFormat + ' 16:00:00']['2. high']}
      {item['Time Series (1min)'][todayFormat + ' 16:00:00']['4. close']}
      {item['Time Series (1min)'][todayFormat + ' 16:00:00']['3. low']}
      <p><Line data ={chartData}
               width={100}
               height={400}
               options={{maintainAspectRatio: false}}
      /></p>
    </div>)
    })
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
