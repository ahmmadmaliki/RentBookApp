    
import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';

export default class Sidebar extends Component {

  render() {
    return (
      <div className="sidenav">
        <a href="javascript:void(0)" clasName="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}