import React, {Component} from 'react';
import './search.css';
import { getStock }from '../../actions/searchActions';
import { connect } from 'react-redux';

export class search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }

    // this.props.changeSearchTerm(this.state.searchTerm);

  }
  onClick = (e) => {
    let result = this.state.searchTerm;
    this.props.changeSearchTerm(result);
    // dispatch get stock
    // update store state
    // re-render
    // in stockview
    // does searchR.stock exist?
    // if it does, show graph
    // if not, show something else
  }

  onChange = (e) => {
    let result = e.target.value;
    this.setState({
      searchTerm: result,
    })
    console.log(result)

  }


  render() {
    return (
      <div>
        <input type='text' placeholder='Enter your tickr symbol' id='search' onChange={this.onChange}></input>
        <button type='button' id='btnSearch' onClick={this.onClick}>Search</button>
      </div>);
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchTerm: (text) => { dispatch(getStock(text)); },
  }
}

export default connect(null, mapDispatchToProps)(search);
