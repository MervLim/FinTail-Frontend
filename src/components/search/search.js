import React, {Component} from 'react';
import './search.css';
import { getStock, searchTerm, getNews, searchResult }from '../../actions/searchActions';
import { connect } from 'react-redux';
import axios from 'axios';

export class search extends Component {

  onClick = (e) => {
    let result = this.state.searchTerm;
    this.props.changeSearchTerm(result);
    this.props.getNews(result);
    this.props.getStock(result);
    console.log("UserProps" ,this.props.user.user._id);
    axios.post('/preference/stock/' + this.props.user.user._id ,result,{
       searchTerm : result
    })
      .then(function (response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
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
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchTerm: (text) => { dispatch(searchTerm(text)); },
    getStock: (text) => { dispatch(getStock(text)); },
    getNews: (text) => {dispatch(getNews(text)); },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(search);
