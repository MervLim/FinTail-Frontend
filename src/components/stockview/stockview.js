import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getStock }from '../../actions/searchActions';

import axios from 'axios';


export class stockview extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.result);

  this.state = {
    stocks: []
  }
}






  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    result: state.searchR.searchTerm,
    JSONresult: state.searchR.stock
  };
}



export default connect(mapStateToProps, null)(stockview);
