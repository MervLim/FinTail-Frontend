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
CHECK FOR MARKET OPENING AND

*/
    console.log(currentTime);
    let stock = this.props.result[0];
    if(typeof(stock) == "undefined") {
      return
    } else if (typeof(stock) !== "undefined" && newCurrentTime > 430 && newCurrentTime < 2130){
    //Display Doughnut Chart  If Market is Closed.
    return (<div id='doughnut-chart'>
     <Doughnut
      data={{
             meta: stock['Meta Data']['2. Symbol'],
             time: stock['Time Series (1min)']['2017-07-24' + ' 16:00:00']['2. high']
      }}
      width={200}
      height={50}
      options={{
         maintainAspectRatio: false
      }}
    />
    </div>)
  } else {
    return (
    //Display Doughnut Chart If Market is Open
    <Doughnut 
      data={
        {labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
         datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]}}       
       width={200}
       height={50}
       options={{
         maintainAspectRatio: false
       }} />
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
