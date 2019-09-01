import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {addBook} from '../Publics/Actions/item';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

class Modaladd extends Component {
  constructor(props){
    super(props);
    this.state={
      BookData:{
         Title: '',
         Description: '',
         Image: '',
         Date_Released: '',
         id_genre: '',
         id_availability: ''
      }
  }
}
addBook= async(data)=>{
  await this.props.dispatch (addBook(data))
  .then(()=>{
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Book added successfully',
      showConfirmButton: false,
      timer: 1500
    }).then(()=>{
      window.location.reload()
    })
  })
}
  render() {
    return (
      <Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>Add book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="Title">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter Title"
        onChange={(e)=>{
          let BookData=this.state;
            BookData.Title=e.target.value
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Enter Description"
        onChange={(e)=>{
          let BookData=this.state;
            BookData.Description=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="Image">
        <Form.Label>Image</Form.Label>
        <Form.Control placeholder="Image"  
        onChange={(e)=>{
          let BookData=this.state;
            BookData.Image=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="Date_Released">
        <Form.Label>Date Released</Form.Label>
        <Form.Control placeholder="tttt-bb-hh"
        onChange={(e)=>{
          let BookData=this.state;
            BookData.Date_Released=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="id_genre">
        <Form.Label>Id Genre</Form.Label>
        <Form.Control placeholder="Id"
        onChange={(e)=>{
          let BookData=this.state;
            BookData.id_genre=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="id_availability">
        <Form.Label>Id Availability</Form.Label>
        <Form.Control placeholder="Id"
        onChange={(e)=>{
          let BookData=this.state;
            BookData.id_availability=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.onHide}>
          Cancel
        </Button>
        <Link to='/home'>
        <Button variant="primary" onClick={()=>{this.props.onHide();
          this.addBook(this.state.BookData);
        }}>
          Save
        </Button>
        </Link>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default connect()(Modaladd);
