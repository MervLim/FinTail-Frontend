import React, {Component} from 'react';
import './search.css';
import { getStock, searchTerm, getNews, getNewsAndStock }from '../../actions/searchActions';
import { connect } from 'react-redux';

export class search extends Component {

  constructor(props) {
    super(props);

  }

  onClick = (e) => {
    let result = this.state.searchTerm;
    this.props.changeSearchTerm(result);
    this.props.getNewsAndStock(result);
    console.log(this.props);
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

    getNewsAndStock: (text) => {dispatch(getNewsAndStock(text)); }

  }
}

const mapStateToProps = (state) => {
  return {
    result: state.JSONresult.result
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(search);
