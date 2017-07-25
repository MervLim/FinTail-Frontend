import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';

export default class chart extends Component{
  constructor(props) {
    super(props);
    // console.log(this.props.result);

  }


  componentDidMount(){
    console.log(this.refs.chart.chart_instance);
  }
  render() {
    return (
      <div>
        <Line ref='chart' data={this.state.result} width={100} height={500} padding={100}/>

      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    result: state.JSONresult.result
  };
}
