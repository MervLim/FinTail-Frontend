import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {Doughnut} from 'react-chartjs-2';


export class doughnutChart extends Component {
  constructor(props) {
    super(props);
  }

  renderStock(){
    //Set Date and Time
    let today = new Date();
    const dd = today.getDate()-1;
    const mm = today.getMonth()+1; //January is 0!
    const yyyy = today.getFullYear();
    const dateCombine = yyyy+'-'+mm+'-'+dd;
    let todayFormat =  moment(dateCombine).format('YYYY-MM-DD');

    const hours = today.getHours();
    const mins = today.getMinutes();
    const currentTime = String(hours) + String(mins);
    const newCurrentTime = parseInt(currentTime);
    console.log(typeof(newCurrentTime));

/*
CHECK FOR MARKET OPENING 

*/
    console.log(currentTime);
    let stock = this.props.result[0];
  //  let closedMarket = stock['Time Series (1min)'][todayFormat + ' 16:00:00']['1. open'];
    if(typeof(stock) == "undefined") {
      return
    } else if (typeof(stock) !== "undefined" && newCurrentTime > 430 && newCurrentTime < 2130){
    //Display Doughnut Chart  If Market is Closed.
    let chartData={
      labels: ["High", "Low"],
       datasets: [{
              data:[         
                 stock['Time Series (1min)'][todayFormat + '16:00:00']['1. open'],
                 stock['Time Series (1min)'][todayFormat  + ' 16:00:00']['3. low']
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
      <div>
         <Doughnut data={chartData} />
      </div>
    )
    } else {
      let chartData={
       datasets: [{
              data:[         
                 stock['Time Series (1min)'][todayFormat + currentTime]['2. high'],
                 stock['Time Series (1min)'][todayFormat  + currentTime]['3. low']
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
    //Display Doughnut Chart If Market is Open
      <div>
        <Doughnut data={chartData} />
      </div>
    )
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
