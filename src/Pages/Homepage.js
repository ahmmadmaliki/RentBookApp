import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Homepage.css';
import '../Components/sidebar.css';
import Navbarr from '../Components/Navbar';
import CarouselSide from '../Components/Corousel';
import Book from '../Components/Book';

class Homepage extends Component{
  render(){
    return(
      <div id="main" className="body">
             <Navbarr />
                  <CarouselSide />
                  <p style={{fontSize: 23,marginLeft: 10 }}><b>Book List</b></p>
                  
                   <Book />
             
         </div>
    )
   
  }
}
export default Homepage;