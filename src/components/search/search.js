import React, {Component} from 'react';
import './search.css';
<<<<<<< HEAD
import { getStock, searchTerm,getNews}from '../../actions/searchActions';
=======
import { getStock, searchTerm, getNews }from '../../actions/searchActions';
>>>>>>> 79344315177007b610f046002d45aa15c922fa68
import { connect } from 'react-redux';

export class search extends Component {
  constructor(props) {
    super(props);



    // this.props.changeSearchTerm(this.state.searchTerm);

  }
  onClick = (e) => {
    let result = this.state.searchTerm;
    this.props.changeSearchTerm(result);
    this.props.getStock(result);
    this.props.getNews(result);
<<<<<<< HEAD
=======

>>>>>>> 79344315177007b610f046002d45aa15c922fa68
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
<<<<<<< HEAD
    getNews: (text) => {dispatch(getNews(text));}
=======
    getNews: (text) => {dispatch(getNews(text)); }
>>>>>>> 79344315177007b610f046002d45aa15c922fa68
  }
}

export default connect(null, mapDispatchToProps)(search);