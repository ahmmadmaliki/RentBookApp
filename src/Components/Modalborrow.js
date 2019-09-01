import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {borrowBook} from '../Publics/Actions/item';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

class Modaladd extends Component {
  constructor(props){
    super(props);
    const d=new Date()
    const dateborrow=d.toDateString()
    const someDate = new Date();
    const numberOfDaysToAdd = 14;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    const dateback=someDate.toDateString()
    this.state={
      RentData:{
         id: '',
         Date_Borrow: dateborrow,
         Date_Back: dateback,
         Status: 'Borrowed',   
      }
  }
}
borrowBook= async(data)=>{
  await this.props.dispatch (borrowBook(data))
  .then(()=>{
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Borrow Successful',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        window.location.reload()
      })
      
  })
  
}
componentDidMount=()=>{
    let {RentData}=this.state
    RentData.id=this.props.id
    this.setState({RentData})
}
  render() {
    return (
      <Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>Borrow Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="id">
        <Form.Label>Book Id</Form.Label>
        <Form.Control value={this.props.id}/>
      </Form.Group>
      <Form.Group controlId="Date Borrow">
        <Form.Label>Date Borrow</Form.Label>
        <Form.Control value={this.state.RentData.Date_Borrow}/>
      </Form.Group>
      <Form.Group controlId="Date Back">
        <Form.Label>Date Back</Form.Label>
        <Form.Control value={this.state.RentData.Date_Back} />
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.onHide}>
          Cancel
        </Button>
        <Link to={`/details/${this.props.id}`}>
        <Button variant="primary" onClick={()=>{this.props.onHide();
          this.borrowBook(this.state.RentData);
        }}>
          Borrow
        </Button>
        </Link>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default connect()(Modaladd);
