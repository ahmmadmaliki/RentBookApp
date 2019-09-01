import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import Navbarr from '../Components/Navbar';

class explore extends Component{
    state = {
        getAPI: [],
      };
      componentDidMount = () => {
        axios.get('http://localhost:3030/bookrent/book')
          .then (res => {
            this.setState ({getAPI: res.data.data});
            console.log ('getAPI =', this.state.getAPI);
          })
          .catch (err => console.log ('error =', err));
      };
      render(){
        const {getAPI}=this.state;
          return(
        <div id="main">
            <Navbarr />
            <Row>
            {getAPI.map((item, index) =>{ 
              return(
                <Col>
                  <Card style={{ width: '17rem', height: '25rem'}}>
                  <Card.Img variant="top" src={item.Image} height={170} />
                  <Card.Body>
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>
                     {item.Description.substr(0,120)}
                    </Card.Text>
                    <Button variant="primary"><Link to={`/details/${item.id}`} style={{ color: '#FFF' }}>Details</Link></Button>
                  </Card.Body>
                </Card>
                </Col>
              );
            })
          }
            </Row>
            </div>
          )
      }
}

export default explore;