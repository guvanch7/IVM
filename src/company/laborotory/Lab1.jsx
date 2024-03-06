import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../assets/labImg/prod1.2.png"
import product2 from "../../assets/labImg/prod1.3.png"
import product3 from "../../assets/labImg/prod1.4.png"


import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Lab1() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>MOLECULAR MOUSE</h1>
            <h3>Qualitative and fast analysis of DNA targets through real-time PCR</h3>
            <p>Molecular Mouse system is the world’s first handheld platform for the Real Time PCR. </p>
            <p>Ready-to-use lab-on-chip cartridges, with all lyophilized reagents in each micro-well, it is possible to perform up to 6 simultaneous multiplex reactions</p>
            <MDBRow className="align-items-center justify-content-evenly">


                <MDBCol className="mt-4" lg={6}>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <h1>SEPSIS PANEL</h1>
                    <p>The largest panel, with 64 different targets, for the rapid detection of microorganisms of major clinical relevance and their antibiotic resistance genes, starting from positive blood cultures</p>

                    <p>Rapid results in about 1 HOUR</p>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>



                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>MODULAR CONFIGURATION AS SAMPLES INCREASE</h1>
                    <p>Up to 6 instruments can be managed independently
                        with one software session</p>
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="addEff2 btn btn-primary ">Send enquiry</Link>
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}


export default Lab1;