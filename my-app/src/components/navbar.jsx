import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'



const baseURL = "http://127.0.0.1:8000";

function Navbar() {
    return (
        <nav className="navbar navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={require('./logo.png')} alt="Logo" width="50" height="40" className="d-inline-block align-bottom" />
            <span className="restify_title">Restify</span>
          </a>
        </div>
        
        <span style={{ marginRight: '20px', color: 'gray'}}><a href="#" className="nav-link"><FontAwesomeIcon icon={faHouse} style={{ color:'#ff5a5f'}}/> Dashboard</a></span>
        <span style={{ marginRight: '20px', color: 'gray' }}><a href="#" className="nav-link"><FontAwesomeIcon icon={faBell} style={{ color:'#ff5a5f'}}/> Notifications</a></span>
        <span style={{ marginRight: '40px', color: 'gray'}}><a href="#" className="nav-link"><FontAwesomeIcon icon={faDoorOpen} style={{ color:'#ff5a5f'}}/> Logout</a></span>
      </nav>
    );
  }

export default Navbar;