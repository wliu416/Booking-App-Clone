import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const baseURL = "http://127.0.0.1:8000";
const accessToken = localStorage.getItem("accessToken");

function handleLogout() {
    // Remove the authentication token from localStorage
    localStorage.removeItem('accessToken');

    // Redirect the user to the login page or other desired page
    window.location.href = '/signin';
  }

function Navbar() {
    
    const [notifications, setNotifications] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`${baseURL}/notifications/list/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setNotifications(data.results);
          })
          .catch((error) => {
            console.error(`Error fetching notifications: ${error}`);
          });
      }, []);
    

        useEffect(() => {
            const fetchUserData = async () => {
              try {
                const response = await fetch(`${baseURL}/users/viewMyProfile/`, {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                });
        
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const data = await response.json();
                setUser(data);
              } catch (error) {
                console.error(`Error fetching user data: ${error}`);
              }
            };
        
            fetchUserData();
          }, []);
        
    var avatar = user.avatar;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={require('./logo.png')} alt="Logo" width="50" height="40" className="d-inline-block align-bottom" />
            <span className="restify_title">Restify</span>
            </a>

            <div className="nav-item dropdown profile">
            <a className="nav-link dropdown-toggle dropdown-toggle-no-caret" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div style={{ display: "flex", alignItems: "center" }}>
                {avatar ? (
                <img src={avatar} alt="Avatar" width="40" height="40" style={{ borderRadius: '50%', marginRight: '10px' }} />
                ) : (
                <img src={require('./avatar.png')} alt="Default Avatar" width="40" height="40" style={{ borderRadius: '50%', marginRight: '10px' }} />
                )}
                <span>My Profile</span>
            </div>
            </a>
                <ul className="dropdown-menu profile" aria-labelledby="navbarDropdown" style={{marginTop: '10px'}}>
                    <li><a className="dropdown-item" href="#" style={{textAlign: 'center'}}>Edit Profile</a></li>
                </ul>
            </div>
                     

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link to="/dashboard" className="nav-link"><FontAwesomeIcon icon={faHouse} style={{ color:'#ff5a5f'}}/> Dashboard</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle dropdown-toggle-no-caret" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faBell} style={{ color:'#ff5a5f'}}/> Notifications
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                {notifications.map((notification) => (
                <li key={notification.id}><a className="dropdown-item" href="#" style={{ fontWeight: 'bold', textAlign: 'center' }}>{notification.details}</a></li>
                ))}
                    
                    <li><hr className="dropdown-divider" /></li>
                    <li ><a className="dropdown-item" href="#" style={{ fontWeight: 'bold', textAlign: 'center' }}>View All</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a onClick={handleLogout} className="nav-link"><FontAwesomeIcon icon={faDoorOpen} style={{ color:'#ff5a5f'}}/> Logout</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    );
  }

export default Navbar;