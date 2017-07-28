import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
import EntryPriceModal from '../modal/entryPriceModal';
import uuid from 'uuid';
class doughnutChart extends Component {
  constructor(props) {
    super(props);
  }
  renderStock(){
    //Set Date and Time
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
    const currentTimeTwoFourFormat = String(hours - 12) + ':' + String(mins);
    const intCurrentTime = parseInt(currentTime);
/*
CHECK FOR MARKET OPENING
*/
    let stock = this.props.result;
    if(typeof(stock) == "undefined") {
      return
    } else if (typeof(stock) !== "undefined" && intCurrentTime > 430 && intCurrentTime < 2130){
    //Display Doughnut Chart  If Market is Closed.
    return stock.map((item)=>{
      item = item[0];
      let chartData={
         title: item['Meta Data']['2. Symbol'],
         id: uuid.v4(),
        labels: ["High", "Low"],
         datasets: [{
                data:[
                   item['Time Series (1min)'][todayFormat + ' 16:00:00']['1. open'],
                   item['Time Series (1min)'][todayFormat  + ' 16:00:00']['3. low']
                ],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
         }]
      }
      return (
        <div key={chartData.id} className='doughnutChart'>
          <EntryPriceModal />
          {chartData.title}

          <Doughnut data={chartData}
                    width={150}
                    height={150}
                    options={{maintainAspectRatio: false}} />
        </div>
      )
    })
    } else {
      return stock.map((item)=>{
        item = item[0];
        let chartData={
           id: uuid.v4(),
          labels: ["High", "Low"],
           datasets: [{
                  data:[
                     item['Time Series (1min)'][todayFormat + ' 16:00:00']['1. open'],
                     item['Time Series (1min)'][todayFormat  + ' 16:00:00']['3. low']
                  ],
                  backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
                  ],
                  hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
                  ]
           }]
        }
        return (
          <div key={chartData.id} className='doughnutChart'>
            <EntryPriceModal />
            <Doughnut data={chartData}   width={250}
              height={250}
              options={{maintainAspectRatio: false}}/>
          </div>
        )
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
export default connect(mapStateToProps, null)(doughnutChart);
