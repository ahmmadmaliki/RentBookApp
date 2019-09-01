import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {Link}  from 'react-router-dom';
import {deleteBook} from '../Publics/Actions/item';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';

class Modaldelete extends Component{
    deleteBook=async(id)=>{
        await this.props.dispatch(deleteBook(id))
        .then(()=>{
          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'The book has been deleted',
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            window.location='/home'
          })
         
        })
    }
    render(){
        return(
        <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this book?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            No
          </Button>
          <Link>
          <Button variant="primary" onClick={()=>{
              this.props.onHide();
              this.deleteBook(this.props.id);
          }}>
              Yes
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
        )
    }
}

export default connect()(Modaldelete);