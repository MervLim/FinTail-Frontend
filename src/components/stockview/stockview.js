import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getStock ,getNews }from '../../actions/searchActions';

import axios from 'axios';


export class stockview extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.result);

  }

renderNews(){
    
}


renderStock(){
  var currentdate = new Date();
  var datetime =  currentdate.getFullYear() + '-' + (((currentdate.getMonth()+1)< 10)?"0":"") + '-' +  (((currentdate.getDate() < 10)?"0":""));
  console.log(datetime);

  let stock = this.props.result[0];
  if(typeof(stock) == "undefined") {
    return
  } else {
  return (<div>
    {stock['Time Series (Daily)'][datetime]['2. high']}
  </div>)
 }
}

  render() {
    console.log(this.props.result[0]);
    return (
      <div>
        {this.renderStock()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    result: state.JSONresult.result,
    news: state.NEWSData.news
  };
}



export default connect(mapStateToProps, null)(stockview);