import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "../navbar";
import { Link } from 'react-router-dom';

const baseURL = "http://127.0.0.1:8000";

function UserTerminated() {
    return (
        <>
        <Navbar />
        <div clasName="container">
          <div className="fs-2 fw-bold d-flex align-items-center justify-content-evenly">
                <p className="main_title_host_pending_reservation">
                Terminated Reservations
                </p>
          </div>
          <div class="container d-flex align-items-center justify-content-center">
            <div class="card-deck w-75">

                
            </div>
          </div>
        </div>
        </>
    )
}

export default UserTerminated;