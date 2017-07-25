import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import './lineChart.css';


export class lineChart extends Component {
  constructor(props) {
    super(props);
  }

  renderStock(){
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




    console.log(currentTime);
    let stock = this.props.result[0];
    if(typeof(stock) == "undefined") {
      return
    } else if (typeof(stock) !== "undefined" && newCurrentTime > 430 && newCurrentTime < 2130){

    return (<div id='line-chart'>
      <p>{stock['Meta Data']['2. Symbol']}</p>
      <p>{stock['Time Series (1min)'][todayFormat + ' 16:00:00']['2. high']}</p>
      <p>{stock['Time Series (1min)'][todayFormat + ' 16:00:00']['1. open']}</p>
      <p>{stock['Time Series (1min)'][todayFormat + ' 16:00:00']['3. low']}</p>
    </div>)
  } else {
    return (<div  id ='line-chart'>
      <p>{stock['Meta Data']['2. Symbol']}</p>
      <p>{stock['Time Series (1min)'][todayFormat + currentTime]['2. high']}</p>
      <p>{stock['Time Series (1min)'][todayFormat + currentTime]['1. open']}</p>
      <p>{stock['Time Series (1min)'][todayFormat + currentTime]['3. low']}</p>
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
