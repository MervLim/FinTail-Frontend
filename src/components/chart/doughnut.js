import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import {LineChart,Doughnut} from 'react-chartjs';


export class doughnut extends Component{
  constructor(props) {
    super(props);
  }
  data(){
    return({
      labels: this.labels,
      dataset:[
        {
             

        }
      ]
    })
  }

  renderDoughnutChart(){
  //let stock = this.props.result[0];
  if (this.props.result.length == "undefined") {
    return
  } else {
    return (
         <div> </div> 
    )
   }
  }

  render() {
    return (
      <div>
          {this.renderDoughnutChart()}     
      </div>
    );
  }
}

Doughnut.propTypes = {
  Doughnut:PropTypes.string,
};

const mapStateToProps=(state)=>{
  return{
    result: state.JSONresult.result
  };
}


export default connect(mapStateToProps, null)(doughnut);