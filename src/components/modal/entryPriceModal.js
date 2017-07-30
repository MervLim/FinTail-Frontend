import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import './entryPriceModal.css';
import {addTotalPrice} from '../../actions/updateChartActions';

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

  onClick = (e) => {
     let totalPrice = this.state.totalPrice;
     let volume = this.state.volume;
     console.log(totalPrice)
     this.props.updateEntryPrice(totalPrice, volume);
  }

  onChange = (e) => {
    let stockVol = e.target.value;
    let entryPrice = e.target.value;

    this.setState({
      volume: stockVol,
      totalPrice: entryPrice * stockVol
    })
  }

  enterKeyPressClick = (e) => {
    if(e.charCode==13){
      let totalPrice = this.state.totalPrice;
      let volume = this.state.volume;
      console.log(totalPrice)
      this.props.updateEntryPrice(totalPrice, volume);
    }
  }
  enterKeyPress= (e) => {
    if(e.charCode==13){
      let stockVol = e.target.value;
      let entryPrice = e.target.value;

      this.setState({
        volume: stockVol,
        totalPrice: entryPrice * stockVol
      })
    }
  }

	render () {
	    return (
	      <div>
	        <button onClick={this.handleOpenModal}>Add</button>
	        <Modal isOpen={this.state.showModal} className="Modal" contentLabel='Price modal'>
                <form>
                <input className='input' onChange={this.onChange} onKeyPress={this.enterKeyPress} type= "text" placeholder="Enter Your Entry Price"/>
                <input className='input' onChange={this.onChange} onKeyPress={this.enterKeyPress} type= "text" placeholder="Enter Your Stock Volume"/>
                </form>
                <button onClick={this.onClick} onKeyPress={this.enterKeyPressClick}>Submit Entry</button>
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
