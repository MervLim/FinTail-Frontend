import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getStock }from '../../actions/searchActions';
import './stocksview.css';

import axios from 'axios';


export class stockview extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.result);

  }


renderStock(){
  // var currentdate = new Date();
  // var datetime =  currentdate.getFullYear() + '-' + (currentdate.getMonth()+1) + '-' +  currentdate.getDate();
  // console.log(datetime);

  let stock = this.props.result[0];
  if(typeof(stock) == "undefined") {
    return
  } else {
  return (<div id='line-chart'>
    <p>{stock['Meta Data']['2. Symbol']}</p>
    <p>{stock['Time Series (Daily)']['2017-07-21']['2. high']}</p>
    <p>{stock['Time Series (Daily)']['2017-07-21']['1. open']}</p>
    <p>{stock['Time Series (Daily)']['2017-07-21']['3. low']}</p>
  </div>)
 }
}


renderNews(){
  if (this.props.newsResult.length <= 0) {
    return(
      <div></div>
    )
  } else {
    return this.props.newsResult[0].data.map((item) => {
      return (
        <div id ='newsFeed'>
          <p><a href = {item.url}>{item.title}</a></p>
        </div>

      )
    });
  }


}
  render() {

    return (
      <div className='stockList'>
        {this.renderStock()}
        {this.renderNews()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    result: state.JSONresult.result,
    newsResult: state.NEWSData.news
  };
}



export default connect(mapStateToProps, null)(stockview);
