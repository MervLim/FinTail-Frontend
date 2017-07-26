import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import './entryPriceModal.css';



export class EntryPriceModal extends Component {
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
	        <Modal isOpen={this.state.showModal} className="Modal">
                <form>
                <input className='input' type= "text" placeholder="Enter Your Entry Price"/>
                <input className='input' type= "text" placeholder="Enter Your Stock Volume"/>
                </form>
                <button onClick={this.handleCloseModal}>Submit Entry</button>
                <button onClick={this.handleCloseModal}>Close Modal</button>

	        </Modal>
	      </div>
	    );
	  }
	}

const mapDispatchToProps=(dispatch)=>{
  return{
    
  }
}
export default EntryPriceModal;
