import React, {Component} from 'react';
import *  as storeDashboard from '../../actions/searchActions';
import { connect } from 'react-redux';

import uuid from 'uuid';
import axios from 'axios';


 class newsfeed extends Component {
  constructor(props) {
    super(props);
  }

renderNews(){
  if (this.props.newsResult.length <= 0) {
    return(
      <div></div>
    )
  } else {
    return this.props.newsResult.map((item) => {
      return item[0].data.map((item) => {
        return (
          <div key={uuid.v4()}>
            <a href = {item.url}>{item.title}</a>
            <p>{item.summary}</p>
          </div>
        )
      });
    })
  }
}

  render() {
    return (
      <div className='stockView'>
            {this.renderNews()};
      </div>
    );
  }
}





export default newsfeed;
