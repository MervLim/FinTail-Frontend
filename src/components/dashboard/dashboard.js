import React, {Component} from 'react';
import Search from '../search/search';
import Stockview from '../stockview/stockview';
import Networth from '../networth/networth';
import Chart from '../chart/chart';
import './dashboard.css'


export class dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <header id='navBar'><p><span>Blood</span>Hound - Your portfolio at a glance</p></header>
      <Search />
      <div className='dashboard'>
      <Stockview />
      <Networth />
      <Chart />
      </div>

      </div>

    );
  }
}


export default dashboard;
