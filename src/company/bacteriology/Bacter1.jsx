import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../assets/bacteriologyImg/prod1.2.png";
import product2 from "../../assets/bacteriologyImg/prod1.3.png";
import product3 from "../../assets/bacteriologyImg/prod1.4.png";
import product4 from "../../assets/bacteriologyImg/prod1.5.jpg";


import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Bacter1() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>MT1 Semi-automated rotary microtome</h1>
            <h3>Next-Generation Identification</h3>
            <p>Thanks to the ATR-FTIR technology, I-dOne identifies the bacterial spectra, which can be considered as the molecular fingerprint of microorganisms </p>
            <MDBRow className="align-items-center justify-content-evenly">


                <MDBCol className="mt-4" lg={6}>
                    <h1>I-dOne library</h1>
                    <p>95% of the clinically relevant species detected</p>
                    <p>Over 50.000 spectra collected</p>
                    <p>Library in continuous upgrading</p>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>EASY AND FAST PROCEDURE</h1>
                    <p>Reagent free</p>
                    <p>No sample pre-treatment</p>
                    <p>User-friendly interface</p>
                    <p>Easy cleaning procedure</p>
                    <p>No mechanical maintenance</p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Attenuated Total Reflection - Fourier Transform Infra-Red</h1>
                    <p>I-dOne analyses the spectrum produced by the interaction between intact microbial cells and IR light through the vibrational state of their chemical bonds.  Each species produces a unique fingerprint-like FTIR spectrum</p>
                    <p>Results are reported as Microorganism ID along with relative score that represents the reliability of the identification to known vibrational profiles  of species present in the reference database</p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product4} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>TECHNICAL FEATURES</h1>
                    <p>Licensing system for the management of credits: pay per ID</p>
                    <p>Remote assistance service by VPN access</p>
                    <p>Smart and intuitive wizard</p>

                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>


            </MDBRow>

        </MDBContainer>
    )
}


export default Bacter1;