import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../assets/bacteriologyImg/product4.jpg";
import product2 from "../../assets/bacteriologyImg/prod2.2.png";
 


import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Bacter6() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>TRINITY V3</h1>
            <hr className="linee" />
            <MDBRow className="align-items-center justify-content-evenly">
            <MDBCol className="mt-4" lg={6}>
                    <h1>TRINITY V3</h1>
                    <h3> ANTIBIOTIC ZONE READER</h3>
                    <p>TRINITY V3 utilizes digital imaging to automate zone reading and calculations for antibiotic potency assays. An optional colony counting module is available. This complete industrial microbiology system is often used in pharmaceutical QA/QC microbiology laboratories. </p>
                    <p>TRINITY V3 strictly complies with 21 CFR Part 11 electronic signature requirements and follows USP 81, EP, BP and JP agar diffusion assay methods.  IQ OQ PQ validation documents are included with each system purchase. TRINITY V3 is designed and manufactured by Giles Scientific in Santa Barbara, California, USA.</p>
                    <p>Giles Scientific also sells peni cylinders and peni cylinder dispensers for antibiotic potency assays</p>
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>
                <MDBCol className="mt-4" lg={6}>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>
               


 
            </MDBRow>

        </MDBContainer>
    )
}


export default Bacter6;