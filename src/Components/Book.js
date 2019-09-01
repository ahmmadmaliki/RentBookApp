import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getBook} from '../Publics/Actions/item';

class Book extends Component{
  componentDidMount = async () => {
    await this.props.dispatch (getBook ());
  };
render(){
    return(
    <Row>
    {this.props.book.BookList.length >0 ?
      this.props.book.BookList.map((item, index) =>{ 
      return(
        <Col>
          <Card style={{ width: '15rem', height: '23rem'}}>
          <Card.Img variant="top" src={item.Image} height={170} />
          <Card.Body>
            <Card.Title>{item.Title}</Card.Title>
            <Card.Text>
             {item.Description.substr(0,70)}
            </Card.Text>
            <Button variant="primary"><Link to={`/details/${item.id}`} style={{ color: '#FFF' }}>Details</Link></Button>
          </Card.Body>
        </Card>
        </Col>
      )
    }): <div></div>
  }
    </Row>
  )
  }
  
}
const mapStateToProps = state => {
  return {
    book: state.book,
  };
}
 export default connect(mapStateToProps)(Book);