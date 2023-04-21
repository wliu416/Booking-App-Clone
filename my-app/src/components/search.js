import React, {useEffect, useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";

import GridLayout from "react-grid-layout";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import PropertyCard from "./property_tab";
import {Card} from "@mui/material";
import PropertyIndex from "./cards_2";
import {MultiSelect} from "react-multi-select-component";

const baseURL = "http://127.0.0.1:8000";



export default class Properties extends React.Component {
    state = {
        cityFilter: '',
        countryFilter: '',
        nameFilter: '',
        amenityFilter: [],
        searchBar: '',
        orderBy: '',

    };


    handleSubmit () {

    }


    componentDidMount() {

    }


    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        const { cityFilter,
            countryFilter,
            nameFilter,
            amenityFilter,
            searchBar,
            orderBy} = this.state;

        var options = [
            { label: "WiFi Available", value: "Wifi" },
            { label: "Parking Available", value: "Parking" },
            { label: "Self Check-In", value: "Self-CheckIn"},
            { label: "Workspace Available", value: "Workspace"},
        ];



        return (
            <>
                <form className="searchbar" onSubmit={handleSubmit} noValidate>
                    <div className="spacer">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="cityFilter">City:</label>
                                    <input type="text" className="form-control" id="cityFilter" placeholder="City"
                                           value={cityFilter}
                                           onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="countryFilter">Country:</label>
                                    <input type="text" className="form-control" id="countryFilter" placeholder="Country"
                                           value={countryFilter}
                                           onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="nameFilter">Name:</label>
                                    <input type="text" className="form-control" id="nameFilter" placeholder="Property Name"
                                           value={nameFilter}
                                           onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="amenityFilter">Amenities:</label>
                                    <MultiSelect
                                        options={options}
                                        value={amenityFilter}
                                        onChange={handleChange}
                                        labelledBy="Select"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </>
        );
    }
}