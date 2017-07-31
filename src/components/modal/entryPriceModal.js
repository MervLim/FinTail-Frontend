import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import *  as addTotalPrice from '../../actions/searchActions';

import './entryPriceModal.css';



export class entryPriceModal extends Component {
  constructor(props) {
    super(props);
    this.state={
      showModal: false
    };
  }

   handleOpenModal = () => {
     this.setState({showModal: true});
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }




	render () {
	    return (
	      <div>
	        <button onClick={this.handleOpenModal}>Add</button>
	        <Modal isOpen={this.state.showModal} className="Modal" contentLabel='Price modal'>
                <form>
                <input className='input' type='number' onChange={this.props.handleEntryPrice} type= "text" placeholder="Enter Your Entry Price"/>
                <input className='input' type='number' onChange={this.props.handleVolume} type= "text" placeholder="Enter Your Stock Volume"/>
                </form>
                <button onClick={this.props.onClick}>Submit Entry</button>
                <button onClick={this.handleCloseModal}>Close Modal</button>

	        </Modal>
	      </div>
	    );
	  }
	}

const mapDispatchToProps=(dispatch)=>{
  return{
     updateEntryPrice: (totalPrice, volume) => {dispatch(addTotalPrice(totalPrice, volume));}
  }
}
export default connect(null,mapDispatchToProps)(entryPriceModal);
