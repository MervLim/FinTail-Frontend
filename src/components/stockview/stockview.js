import React, {Component} from 'react';
import *  as storeDashboard from '../../actions/searchActions';
import { connect } from 'react-redux';
import LineChart from '../chart/lineChart';
import DoughnutChart from '../chart/doughnutChart';
import NewsChart from '../news/newsfeed';
import './stockview.css';
import {Bar, Line} from 'react-chartjs-2';
import moment from 'moment';
import uuid from 'uuid';
import axios from 'axios';




export class stockview extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.result);
  }


renderResult(){
  console.log("PROPS: " + this.props.result.length);
   let combinationStock = this.props.result;
  if(combinationStock.length = 0){
    return
  }else{
    console.log("@Rendering Line/Dough/")
    return combinationStock.map(items=> {
      console.log('iterating'+ items)
        return (
          <div>
           <LineChart chartData={items.result} />

          </div>
        );
      });
  }

}
  render() {

    return (
      <div className='stockView'>
      {this.renderResult()}

        <button type='button' id='btnAddPreference' onClick={this.onClick}>Add to dashboard</button>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    result: state.JSONresult.result,
    newsResult: state.JSONresult.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToDashBoard: (array) => { dispatch(storeDashboard(array)); },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(stockview);
