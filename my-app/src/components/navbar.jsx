import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const baseURL = "http://127.0.0.1:8000";

function Navbar() {

    //the notification items will be put in here (data)
    const [data, setData] = useState([]);


    //useeffect hook will be here to obtain the notifications and put them in data

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={require('./logo.png')} alt="Logo" width="50" height="40" className="d-inline-block align-bottom" />
            <span className="restify_title">Restify</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link to="/dashboard" className="nav-link"><FontAwesomeIcon icon={faHouse} style={{ color:'#ff5a5f'}}/> Dashboard</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faBell} style={{ color:'#ff5a5f'}}/> Notifications
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">View All</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link"><FontAwesomeIcon icon={faDoorOpen} style={{ color:'#ff5a5f'}}/> Logout</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    );
  }

export default Navbar;