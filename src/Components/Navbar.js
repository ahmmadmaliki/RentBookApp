import React, {Component} from 'react';
import {Nav, NavDropdown, Navbar, Form, FormControl,Button} from 'react-bootstrap';
import {Card, Col} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Modaladd from './Modaladd'
import './Homepage.css';
import {connect} from 'react-redux';
import {getBook} from '../Publics/Actions/item';
import {getGenre} from '../Publics/Actions/genres';

class Navbarr extends Component{
  state = {
      showModal: false
    };
    componentDidMount = async () => {
      await this.props.dispatch (getBook ());
      await this.props.dispatch (getGenre());
    };
    handleClick(stuff){
      const Data=this.state.Data
      Data.map((item)=>{
          if(item.Genres===stuff.Genres){
            console.log(item)
            // return(
            //   <div className='content'>
            //   <Col>
            //   <Card style={{ width: '15rem', height: '23rem'}}>
            //   <Card.Img variant="top" src={item.Image} height={170} />
            //   <Card.Body>
            //     <Card.Title>{item.Title}</Card.Title>
            //     <Card.Text>
            //      {item.Description.substr(0,70)}
            //     </Card.Text>
            //     <Button variant="primary"><Link to={`/details/${item.id}`} style={{ color: '#FFF' }}>Details</Link></Button>
            //   </Card.Body>
            // </Card>
            // </Col>
            // </div>
            // )
          }
      })

    }
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
    redirect(){
      window.location='/'
    }
    render(){
      let ModalClose=()=>{
        this.setState({showModal: false})
      }
      console.log(this.props)
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
              <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#"><Link to='/explore'><i className="fas fa-search"></i>Explore</Link></a>
                <a href="#"><Link><i class="fas fa-history"></i>History</Link></a>
                <a href="#"><Link onClick={()=>this.setState({showModal: true})}><i class="fas fa-plus-circle"></i>Add Book</Link></a>
                <Modaladd show={this.state.showModal} onHide={ModalClose} />
                <a href="#"><Link onClick={this.redirect}><i class="fas fa-door-open"></i>Logout</Link></a>
              </div>
            <Navbar.Brand href="#home" >
            <button type='button' id='sidebarCollapse' className='btn btn-info' onClick={this.openNav}>
              <i className='fas fa-align-justify' />
            </button> 
              <i className="fas fa-book-reader"></i>       Arkademy Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Link to='/home' style={{ color: '#FFF', fontSize:22, margin: 3}}><i class="fas fa-home"></i>Home</Link>
                <NavDropdown title="All Categories" id="basic-nav-dropdown">
                  {this.props.genres.Genres.map((item)=>{
                    return <NavDropdown.Item onClick={()=>this.handleClick(item)}>{item.Genres}</NavDropdown.Item>
                    })
                    }
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          )
      }
}
const mapStateToProps = state => {
  return {
    book: state.book,
    genres: state.genres,
  };
}
export default connect(mapStateToProps)(Navbarr);