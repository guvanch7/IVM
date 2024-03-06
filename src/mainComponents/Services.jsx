import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import prodImg from '../prodImg/prod.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon,
} from 'mdb-react-ui-kit';





function Services() {
    return (
        <MDBContainer className="mt-5">
            <h1 className="text-center">Services and Solutions for Hospitals and Clinics</h1>
            <p className="text-muted fw-500">
                IVM has a wide range of competencies, qualified specialists and partners. Our success is based on an individual approach to serving each client.
            </p>

            <MDBRow>
                <MDBCol md={4}>
                    <div className="d-flex ">
                        <MDBIcon icon="user-tie" size="3x" className="me-3 addEff" />
                        <div>
                            <h3 className="mb-3">Audit</h3>
                            <p>IVM offers comprehensive solutions to Audit Processes, Audit Equipment, and Audit Manpower.</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol md={4}>
                    <div className="d-flex ">
                        <MDBIcon icon="hospital-alt" size="3x" className="me-3 addEff" />
                        <div>
                            <h3 className="mb-3">Comprehensive Medical Department Equipment</h3>
                            <p>IVM we offer equipment and materials to almost all client groups in the healthcare system. With a wide range of products, IVM can fully equip healthcare facilities of almost any profile.</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol md={4}>
                    <div className="d-flex ">
                        <MDBIcon icon="laptop-medical" size="3x" className="me-3 addEff" />
                        <div>
                            <h3 className="mb-3">Healthcare consulting</h3>
                            <p>We comprehensively solve problems based on our vast experience: we may have encountered a similar problem somewhere and are ready to advise our clients on how to solve it.</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol md={4}>
                    <div className="d-flex ">
                        <MDBIcon icon="headset" size="3x" className="me-3 addEff" />
                        <div>
                            <h3 className="mb-3">Technical Maintenance</h3>
                            <p>Our service engineers support the operation of complex equipment in hospitals, laboratories, and private clinics, ensuring that medical devices remain reliable tools for saving lives in the hands of doctors</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol md={4}>
                    <div className="d-flex ">
                        <MDBIcon icon="calendar-check" size="3x" className="me-3 addEff" />
                        <div>
                            <h3 className="mb-3">Expert design</h3>
                            <p>We don't just sell equipment; we offer comprehensive solutions. We design healthcare facilities, equipping them with the most modern equipment. We guarantee quality and compliance with established standards</p>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}


export default Services;
