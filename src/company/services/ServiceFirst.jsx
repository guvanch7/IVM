import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import service1 from '../../assets/service1.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import background from '../../assets/background.png'


import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBBtn
} from 'mdb-react-ui-kit';






function ServiceFirst() {
    return (
        <MDBContainer className="background-logo" style={{backgroundImage: `url(${background})` }}>

            <MDBBtn className="mt-5" floating size='lg' tag='a'>
                <Link to='/services' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
            </MDBBtn>

            <h2 className="mt-3 mb-4">Medical Equipment Maintenance and Repair</h2>
            <MDBRow>
                <MDBCol className="text-center" lg={12}>
                    <img src={service1} className="w-75" alt="" />
                </MDBCol>

                <MDBCol lg={12} className="mt-5">
                    <h3>It works as intended.</h3>
                    <hr className="linee" />

                    <p>
                    IVM engineers are certified specialists of high level, who are constantly trained at the enterprises of equipment manufacturers.
                    </p>

                     <h3>We provide:</h3>
                </MDBCol>

                <MDBCol lg={4} className="mt-3">

                    <div className="text-center">
                        <div>
                            <MDBIcon icon="cogs" size="3x" className="me-3  addEff" />
                            <h6 className="my-3">Pre-sales preparation</h6>
                        </div>
                    </div>

                </MDBCol>


                <MDBCol lg={4} className="mt-3">

                    <div className="text-center">
                        <div>
                            <MDBIcon icon="clipboard-list" size="3x" className="me-3  addEff" />
                            <h6 className="my-3">Calibration and verification of measuring instruments</h6>
                        </div>
                    </div>

                </MDBCol>

                <MDBCol lg={4} className="mt-3">

                    <div className="text-center">
                        <div>
                            <MDBIcon icon="file-invoice" size="3x" className="me-3  addEff" />
                            <h6 className="my-3">Full set of operational documentation</h6>
                        </div>
                    </div>

                </MDBCol>


                <MDBCol lg={4} className="mt-3">

                    <div className="text-center">
                        <div>
                            <MDBIcon icon="calendar-check" size="3x" className="me-3  addEff" />
                            <h6 className="my-3">Installation, warranty, and post-warranty maintenance</h6>
                        </div>
                    </div>

                </MDBCol>


                <MDBCol lg={4} className="mt-3">

                    <div className="text-center">
                        <div>
                            <MDBIcon icon="tools" size="3x" className="me-3  addEff" />
                            <h6 className="my-3">Repair</h6>
                        </div>
                    </div>

                </MDBCol>


                <MDBCol lg={4} className="my-3">

                    <div className="text-center">
                        <div>
                            <MDBIcon icon="chalkboard-teacher" size="3x" className="me-3  addEff" />
                            <h6 className="my-3">Staff training, technical consulting</h6>
                        </div>
                    </div>

                </MDBCol>


                 
            </MDBRow>

        </MDBContainer>
    )
}


export default ServiceFirst;