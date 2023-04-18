import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "../navbar";
import { Link } from 'react-router-dom';

const baseURL = "http://127.0.0.1:8000";

function UserPending() {
    //The CARDS SHOULD LOOK LIKE THIS WHEN WE MAKE THEM
    /*<div class="card w-100 mb-4">
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <h5
                      class="card-title font-weight-bold reservation_card_title"
                    >
                      Spanish Mediterranean Retreat
                    </h5>
                    <h6 class="reservation_card_location">
                      Location: Valencia, Spain
                    </h6>
                    <a
                      class="fw-semibold host_pending_reservation_view_property_link"
                      href="property_page_after_pending.html"
                      >View property</a
                    >
                    <details class="mt-2 host_pending_reservation_details">
                      <summary
                        class="fw-semibold text-decoration-underline host_pending_reservation_summary"
                      >
                        See details
                      </summary>
                      <ul class="list-group">
                        <li class="list-group-item">
                          Host Name: Alfonzo Gracia-Saz
                          <a
                            class="fw-semibold host_pending_reservation_customer_profile_link"
                            href="host_viewable_profile.html"
                            ><i class="fa fa-user fa-lg" aria-hidden="true"></i
                          ></a>
                        </li>
                        <li class="list-group-item">
                          Request date: 8 February 2023, 6:15 PM
                        </li>
                        <li class="list-group-item">
                          Dates requested: 9 March 2023 - 12 March 2023
                        </li>
                        <li class="list-group-item">Fee: 236$/night</li>
                        <li class="list-group-item">
                          Special accommodation Request:
                          <ul class="host_pending_reservation_special_request">
                            <li>
                              <i
                                class="fa fa-wheelchair fa-lg"
                                aria-hidden="true"
                              ></i>
                              - Wheelchair user
                            </li>
                          </ul>
                        </li>
                        <li class="list-group-item">
                          Special notes from customer:
                          <ul class="host_pending_reservation_special_request">
                            <li>
                              Requesting approval for service dog to be present
                              during stay.
                            </li>
                          </ul>
                        </li>
                        <li class="list-group-item">
                          <i class="fa fa-check fa-lg" aria-hidden="true"></i>
                          Customers are aware of 3:00 PM check-in and 11:00 AM
                          check-out policy
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="btn btn-primary host_reservation_request_button_decline"
                      id="host_existing_reservation_btn_decline1"
                      style="padding: 8px"
                      >Cancel</a
                    >
                  </div>
                </div>
              </div>*/ 

    return (
        <>
        <Navbar />
        <div clasName="container">
          <div className="fs-2 fw-bold d-flex align-items-center justify-content-evenly">
                <p className="main_title_host_pending_reservation">
                Pending Reservation Requests
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

export default UserPending;