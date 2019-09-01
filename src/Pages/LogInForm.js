import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import {userLogin} from '../Publics/Actions/users';


class LogInForm extends Component {
  constructor(props){
    super(props);
    this.state={
      UserData:{
        username: '',
        password: ''
      }
    }
  }
  userLogin=async(data)=>{
    await this.props.dispatch(userLogin(data))
    .then((result)=>{
      if(result.value.data.success==true){
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          window.location='/home'
        })
      }else{
        Swal.fire({
          position: 'center',
          type: 'warning',
          title: 'Failed to Login',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
    render(){
        return (
        <div className="FormCenter">
            <form  className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Username</label>
                <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username"
                onChange={(e)=>{
                  let {UserData}=this.state;
                  UserData.username=e.target.value
                  this.setState({UserData})
                }} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"
                  onChange={(e)=>{
                    let {UserData}=this.state;
                    UserData.password=e.target.value
                    this.setState({UserData})
                  }}
                />
              </div>

              <div className="FormField">
              <Link><button type="submit" className="FormField__Button mr-20"
              onClick={()=>{
                this.userLogin(this.state.UserData)
              }}
              >Login</button></Link> 
                    <Link to='/' className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default connect()(LogInForm);