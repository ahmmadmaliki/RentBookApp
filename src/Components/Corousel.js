import React,{Component} from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import {connect} from 'react-redux';
import {getBook} from '../Publics/Actions/item';

class CarouselSide extends Component{
  componentDidMount = async () => {
    await this.props.dispatch (getBook ());
    
  };
    render(){
    return(
    <Carousel>
        {this.props.book.BookList.length>0 ?
          this.props.book.BookList.map((item,index)=>{
            return(
            <Carousel.Item>
            <img 
            height={300}
            width='100%'
            className="d-block w-100"
           src={item.Image}
            alt={item.Title}
            />
            <Carousel.Caption>
            <h3><b>{item.Title}</b></h3>
            <p>{item.Description.substr(0,40)}</p>
            </Carousel.Caption>
        </Carousel.Item>
            )
        }): <div></div>
      }
    </Carousel>
    )
}
}
const mapStateToProps = state => {
  return {
    book: state.book,
  };
}
 export default connect(mapStateToProps)(CarouselSide);


