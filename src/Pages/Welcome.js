import React, { Component } from 'react';
import {NavLink,Route}  from 'react-router-dom';
import RegisterForm from './RegisterForm'
import LogInForm from './LogInForm'

import '../App.css'

class Welcome extends Component{
    render(){
        return(
            <div className="App">
            <div className="App__Aside">
                  <div className="bottom">
                      <p style={{fontSize: 40  }}><b>Welcome to Rent Book App</b></p>
                  </div>
            </div>
            <div className="App__Form">
              <div className="PageSwitcher">
                    <NavLink to="/log-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Log In</NavLink>
                    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>
                </div>
  
                <div className="FormTitle">
                    <NavLink to="/log-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Log In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
                </div>
                <Route exact path="/" component={RegisterForm}></Route>
                <Route path="/log-in" component={LogInForm}></Route>
            </div>
          </div>
        )
    }
}

export default Welcome;