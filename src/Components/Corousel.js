import React,{Component} from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class CarouselSide extends Component{
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
    <Carousel>
        {getAPI.map((item,index)=>{
            return(
            <Carousel.Item>
            <img 
            height={300}
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
        })}
    </Carousel>
    )
}
}
export default CarouselSide;


