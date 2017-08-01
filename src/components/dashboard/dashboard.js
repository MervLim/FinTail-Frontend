import React, {Component} from 'react';
import Search from '../search/search';
import { connect } from 'react-redux';
import Stockview from '../stockview/stockview';
import Networth from '../networth/networth';
import './dashboard.css'


export class dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('younare  in dashbaord', this.props)
    return (
      <div>
      <header id='navBar'><p><span>Blood</span>Hound - Your portfolio at a glance</p></header>
      <Search />
      <div className='dashboard'>
      <p>{this.props.username}</p>
      <Stockview />
      <Networth />
      </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer
  }
}



export default connect(mapStateToProps, null)(dashboard);
