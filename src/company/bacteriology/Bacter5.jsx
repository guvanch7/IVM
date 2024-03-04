import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../assets/bacteriologyImg/product3.jpg";
import product2 from "../../assets/bacteriologyImg/prod2.2.png";



import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Bacter5() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>BIOMIC V3</h1>
            <hr className="linee" />
            <MDBRow className="align-items-center justify-content-evenly">

                <MDBCol className="mt-4" lg={6}>
                    <h1>BIOMIC V3</h1>
                    <p>BIOMIC V3 is an open system utilizing digital imaging to automate the reading and CLSI/EUCAST interpretation of clinical microbiology tests and QC from various manufacturers. Systems are customized with optional modules including Broth Microdilution*, Disk Diffusion, MIC Strip, Organism ID, Colony Count, Agar Dilution* and Urine Screen. BIOMIC V3 uses AI algorithms to generate test results and assist user decision making and reporting including: pattern matching, character recognition, and image analysis. </p>
                <p>BIOMIC V3 provides a digital record of test results and high resolution images. An LIS/LIMS interface combined with bar code reading and touch-screen entry on a 24 inch monitor offers labs an optimal setup to standardize, record and report test results. BIOMIC V3 is designed and manufactured by Giles Scientific in Santa Barbara, California, USA.</p>
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                 
                </MDBCol>
                <MDBCol className="mt-4" lg={6}>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>

 





            </MDBRow>

        </MDBContainer>
    )
}


export default Bacter5;