import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product0 from "../../assets/labImg/product2.png"
import product1 from "../../assets/labImg/prod2.1.png"
import product2 from "../../assets/labImg/prod2.2.png"
import product3 from "../../assets/labImg/prod2.3.png"


import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Lab4() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>ROLLER Family Instruments</h1>
            <hr className="linee" />
            <MDBRow className="align-items-center justify-content-evenly">




                <MDBCol className="mt-4" lg={6}>
                    <h3>ROLLER Family Instruments</h3>
                    <p>The compact Alifax solution for small laboratories. The ROLLER models perform automatic and manual sampling for low samples and uncapped tubes</p>
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

 

                <h1>Latex Technology</h1>
                <MDBCol className="mt-4" lg={6}>
                    <h3>Have You ever Checked the ESR?</h3>
                    <p>The 3 level LATEX CONTROL, the ready-to-use turbidimetric standards, is the unique characteristics of Alifax ESR line analyzers that provide a Statistical Internal Quality Control useful for the certification of the lab.</p>
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <h3>External Quality Evaluation kit specific for all Alifax ESR analyzers</h3>
                    <p>Third parties international programs available:

                        CAP
                        <br />
                        LABQUALITY
                        <br />

                        NEQAS
                        <br />

                        ONEWORLD ACCURACY
                        <br />

                        API</p>
                </MDBCol>

                <MDBCol className="mt-4 " lg={12}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}


export default Lab4;