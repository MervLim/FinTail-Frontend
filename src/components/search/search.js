import React, {Component} from 'react';
import './search.css';
import { getStock, searchTerm, getNews, getNewsAndStock }from '../../actions/searchActions';
import { connect } from 'react-redux';

export class search extends Component {

  onClick = (e) => {
    let result = this.state.searchTerm;
    this.props.changeSearchTerm(result);
    this.props.getStock(result);
    this.props.getNews(result);
    // this.props.getNewsAndStock(result);

    // dispatch get stock
    // update store state
    // re-render
    // in stockview
    // does searchR.stock exist?
    // if it does, show graph
    // if not, show something else
  }

  onChange = (e) => {
    let result = e.target.value.toUpperCase();
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
    changeSearchTerm: (text) => { dispatch(searchTerm(text)); },
    getStock: (text) => { dispatch(getStock(text)); },
    getNews: (text) => {dispatch(getNews(text)); },
    // getNewsAndStock: (text) => {dispatch(getNewsAndStock(text)); }

  }
}

export default connect(null, mapDispatchToProps)(search);
