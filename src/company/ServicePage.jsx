import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

import {
    MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'

import audit from '../assets/icons/audit.png';
import design from '../assets/icons/design.png';
import repair from '../assets/icons/repair.png';
import arrow from '../assets/icons/arrow.png';
import background from '../assets/background.png'
function ServicePage() {


    return (
        <>
            <MDBContainer className="background-logo" fluid  style={{backgroundImage: `url(${background})` }}>
                <MDBContainer className="  ">
                    <h5 className=" fw-bolder pt-5">OUR SERVICES</h5>

                    <h4>
                        Our approach to service sets us apart
                    </h4>

                    <hr className="linee" />

                    <p>
                        Saving human lives is the most important, noble, and virtuous
                        endeavor one can imagine, and we take pride in having the
                        opportunity to participate in this effort!
                    </p>

                    <MDBRow className=" align-items-center justify-content-between">

                        <MDBCol lg={5} md={5} sm={11} className="card-service mt-4 mb-5 bg-white rounded-7 px-4 py-3 ">
                            <Link to={'/service3'}>

                                <div class="arrow rounded-6">
                                    <div class="border-arrow rounded-6 p-3">
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div class="p-3">
                                    <img src={audit} alt="" />
                                    <h5 class="fw-bold mt-4">Healthcare Audit and Consulting</h5>
                                    <p class="text-muted">Optimizing Healthcare: Audit and Consultation Services</p>
                                </div>
                            </Link>

                        </MDBCol>

                        <MDBCol lg={5} md={5} sm={11} className="card-service bg-white rounded-7 px-4 py-3 ">
                            <Link to={'/service2'}>
                                <div class="arrow rounded-6">
                                    <div class="border-arrow rounded-6 p-3">
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div class="p-3">
                                    <img src={design} alt="" />
                                    <h5 class="fw-bold mt-4">Integrated Hospital Design and Equipment Provision </h5>
                                    <p class="text-muted">Innovative Solutions for Seamless Hospital Design and Equipment Integration</p>
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol lg={5} md={5} sm={11} className="card-service bg-white my-4 rounded-7 px-4 py-3  offset-lg-3 order-lg-last">
                            <Link to={'/service1'}>
                                <div class="arrow rounded-6">
                                    <div class="border-arrow rounded-6 p-3">
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div class="p-3">
                                    <img src={repair} alt="" />
                                    <h5 class="fw-bold mt-4">Medical Equipment Maintenance and Repair</h5>
                                    <p class="text-muted">Keeping Your Medical Equipment Running Smoothly, Every Step of the Way</p>
                                </div>
                            </Link>

                        </MDBCol>








                    </MDBRow>

                </MDBContainer>

            </MDBContainer>
        </>
    );



}

export default ServicePage;