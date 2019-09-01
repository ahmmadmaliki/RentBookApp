import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {updateBook} from '../Publics/Actions/item';
import {connect} from 'react-redux';

class Modaledit extends Component {
  constructor(props){
    super(props);
    this.state={
      BookData:{
         Title: null,
         Description: null,
         Image: null,
         Date_Released: null,
      }
  }
}
editBook= async(data)=>{
  const {Title, Description, Image, Date_Released}=data;
  const id= this.props.book.id
  await this.props.dispatch (updateBook(id,Title, Description, Image, Date_Released));
}
  render() {
    return (
      <Modal {...this.props}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="Title">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter Title" defaultValue={this.props.book.Title}
        onChange={(e)=>{
          let BookData=this.props.book;
            BookData.Title=e.target.value
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Enter Description" defaultValue={this.props.book.Description}
        onChange={(e)=>{
          let BookData=this.props.book;
            BookData.Description=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="Image">
        <Form.Label>Image</Form.Label>
        <Form.Control placeholder="Image" defaultValue={this.props.book.Image} 
        onChange={(e)=>{
          let BookData=this.props.book;
            BookData.Image=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      <Form.Group controlId="Date_Released">
        <Form.Label>Date Released</Form.Label>
        <Form.Control placeholder="tttt-bb-hh" defaultValue={this.props.book.Date_Released}
        onChange={(e)=>{
          let BookData=this.props.book;
            BookData.Date_Released=e.target.value;
          this.setState({BookData});
        }}
        />
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{this.props.onHide();
          this.editBook(this.state.BookData);
        }}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default connect()(Modaledit);
