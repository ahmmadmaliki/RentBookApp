import Navbarr from '../Components/Navbar';
import React, { Component } from 'react';
import {Table,Button,ButtonToolbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import {getRequest} from '../Publics/Actions/request';
import {updateRequest} from '../Publics/Actions/request';

class Request extends Component{
    constructor(props){
        super(props);
        this.state={
            isConfirmed:false
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch (getRequest());
      };
      handleClick=()=>{
          this.setState({isConfirmed: true})
      }
      update=async(data,id)=>{
        await this.props.dispatch(updateRequest(data,id))
      }
    render(){
        return(
        <div id="main">
            <div>
                <Navbarr />
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Id Request</th>
                        <th >Id User</th>
                        <th >Id Book</th>
                        <th>Title</th>
                        <th >Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
            {this.props.request.Request.length>0 ? 
            this.props.request.Request.map((item,index)=>{
                return(
                        <tr>
                        <td>{item.id_request}</td>
                        <td>{item.id_user}</td>
                        <td>{item.id}</td>
                        <td>{item.Title}</td>
                        <td>{item.Description}</td>
                        {item.Status=='requested'?
                        <td>{ 
                        <ButtonToolbar>
                            <Button variant="primary" disabled={this.state.isConfirmed} onClick={()=>{
                                this.handleClick()
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
      request: state.request,
    };
  }
export default connect(mapStateToProps)(Request);
