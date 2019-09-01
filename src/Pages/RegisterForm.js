import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {userRegist} from '../Publics/Actions/users';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            email: null,
            password: null,
        };
    }
    userRegist=async(e)=>{
      e.preventDefault()
      const datauser={
          username: this.state.username,
          email: this.state.email,
          password: this.state.password, 
      }
      await this.props.dispatch(userRegist(datauser))
      .then( ()=>{
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Registration successful',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          window.location='/log-in'
        })
      })
  }
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={ (e)=>this.userRegist(e)} method="post" className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username"  
                  onChange={(e)=>{
                    this.setState({username: e.target.value})
                  }} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" 
                 onChange={(e)=>{
                  this.setState({email: e.target.value})
                }} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" 
                onChange={(e)=>{
                  this.setState({password: e.target.value})
                }} />
              </div>
              <div className="FormField">
                  <button type="submit" className="FormField__Button mr-20">Register</button> <Link to="/log-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default connect()(RegisterForm);