import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../assets/bacteriologyImg/prod2.1.png";
import product2 from "../../assets/bacteriologyImg/prod2.2.png";
import product3 from "../../assets/bacteriologyImg/prod2.3.png";
import product4 from "../../assets/bacteriologyImg/prod2.4.png";
import product5 from "../../assets/bacteriologyImg/prod2.5.png";
import product6 from "../../assets/bacteriologyImg/product2.png";


import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Bacter2() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>HB&L UROQUATTRO</h1>
          
            <MDBRow className="align-items-center justify-content-evenly">
                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="  w-100" alt="" />
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <h1>HB&L UROQUATTRO</h1>
                    <p>The compact instrument, with dedicated reagents, performs rapid bacterial culture, Residual Antimicrobial Activity (RAA) test, clinical antimicrobial susceptibility testing (AST) and rapid phenotypic screening of Multi-Drug Resistant organisms (MDRO), in a few hours with high sensitivity and specificity</p>
                    <p>The software flexibility of the HB&L allows different tests to be performed simultaneously; each reading unit position is independent from the others and can be set according to sample type, incubation time, test profile, analytical protocol and cut-off</p>
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="addEff2 btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <MDBCol className="mt-4 text-center" lg={12}>
                    <img src={product1} className="w-50" alt="" />
                    <p>Real-time bacterial growth curve</p>
                </MDBCol>



                <MDBCol className="mt-4" lg={6}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <h1>Analytical specificity</h1>
                    <p>Samples are incubated at 37°C and constantly mixed avoiding sedimentation, flotation and growth anomalies typical of several micro-organisms.</p>
                    <p>Only alive bacteria are detected while the interference of non-bacterial materials like salts, erythrocytes, leucocytes, epithelial cells or dead bacteria signals are eliminated by the initial blank value reading.</p>
                    <h1>Sensivity</h1>
                    <p>The system is flexible and can be customized, it is possible to set the cut off according to laboratory needs</p>

                </MDBCol>




                


                


 
            </MDBRow>

        </MDBContainer>
    )
}


export default Bacter2;