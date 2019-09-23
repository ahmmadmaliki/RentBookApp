import Navbarr from '../Components/Navbar';
import React, { Component } from 'react';
import {Table,Button,ButtonToolbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import {getDonation} from '../Publics/Actions/donation';
import {updateDonation} from '../Publics/Actions/donation';

class Donation extends Component{
    constructor(props){
        super(props);
        this.state={
            isConfirmed:false
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch (getDonation ());
      };
      handleClick=()=>{
          this.setState({isConfirmed: true})
      }
      update=async(data,id)=>{
        await this.props.dispatch(updateDonation(data,id))
      }
    render(){
        return(
        <div id="main">
            <div>
                <Navbarr />
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Id</th>
                        <th >Title</th>
                        <th >Description</th>
                        <th>Image</th>
                        <th >Date Released</th>
                        <th >Id Genre</th>
                        <th >Id Availability</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
            {this.props.donation.Donation.length>0 ? 
            this.props.donation.Donation.map((item,index)=>{
                return(
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.Title}</td>
                        <td>{item.Description}</td>
                        <td>{item.Image}</td>
                        <td>{item.Date_Released}</td>
                        <td>{item.id_genre}</td>
                        <td>{item.id_availability}</td>
                        {item.Status=='waiting'?
                        <td>{ 
                        <ButtonToolbar>
                            <Button variant="primary" disabled={this.state.isConfirmed} onClick={()=>{
                                this.handleClick()
                                this.update({
                                    Title: item.Title,
                                    Description:item.Description,
                                    Image: item.Image,
                                    Date_Released: item.Date_Released.slice(0,10),
                                    id_genre: item.id_genre,
                                    id_availability: item.id_availability

                                },item.id)
                            }}>
                                {this.state.isConfirmed? 'Confirmed': 'Confirm'}
                            </Button>
                        </ButtonToolbar> 
                        }</td> :<ButtonToolbar>
                            <Button variant="primary" disabled={true}>
                                Confirmed
                            </Button>
                        </ButtonToolbar>
                    }
                        </tr>
                )
            }): <div></div>
            }
                </tbody>
            </Table>
        </div>
    </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      donation: state.donation,
    };
  }
export default connect(mapStateToProps)(Donation);
