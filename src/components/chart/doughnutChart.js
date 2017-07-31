import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
import EntryPriceModal from '../modal/entryPriceModal';
import uuid from 'uuid';
import './doughnutChart.css';
import {addTotalPrice} from '../../actions/updateChartActions';



export class doughnutChart extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      entryPrice: 0,
      volume: 2,
      totalPrice:0
    })

  }

addData = (chart, label, data1, data2) => {
    console.log(chart.data);
    chart.labels.pop();
    chart.labels.push(label);
    chart.datasets.forEach((dataset) => {
        dataset.data.pop();
        dataset.data.push(data1);
    });
    console.log(chart);
}

handleEntryPrice = (e) => {
  this.state.entryPrice = e.target.value;
  console.log('e price ' + this.state.entryPrice);
}

handleVolume = (e) => {
  this.state.volume = e.target.value;
  console.log('vol ' + this.state.volume);

}

onClick = (e) => {
  this.addData(this.chartData, 'heyyyyy', 12);
  let totalPrice = this.state.entryPrice * this.state.volume;
  this.props.updateEntryPrice(totalPrice, parseInt(this.state.volume));
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
    } else if (typeof(stock) !== "undefined"){
    //Display Doughnut Chart  If Market is Closed.
    return stock.map((item)=>{
      item = item[0];
    this.chartData = {
         title: item['Meta Data']['2. Symbol'],
         id: uuid.v4(),
         labels: ["High", "Low"],
         datasets: [{
                data:[
                   (item['Time Series (1min)']['2017-07-28' + ' 16:00:00']['4. close']),
                   this.props.updateChart.totalPrice

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
        <div key={this.chartData.id} className='doughnutChart'>
          <EntryPriceModal handleEntryPrice={this.handleEntryPrice} handleVolume={this.handleVolume} onClick={this.onClick} />
          {this.chartData.title}
          <Doughnut data={this.chartData}
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
            <EntryPriceModal handleEntryPrice={this.handleEntryPrice} handleVolume={this.handleVolume} onClick={this.onClick} />
            {chartData.title}
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
    updateChart: state.UpdateChart
  };
}

const mapDispatchToProps=(dispatch)=>{
  return{
     updateEntryPrice: (totalPrice, volume) => {dispatch(addTotalPrice(totalPrice, volume));}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(doughnutChart);
