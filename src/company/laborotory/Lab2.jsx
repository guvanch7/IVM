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







function Lab2() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>TEST1 2.0</h1>
            <h3>NEW GENERATION INSTRUMENT FOR THE ESR DETERMINATION</h3>
            <p>The new and updated Alifax analyzer that allows to test the erythrocyte sedimentation rate and overcomes the majority of the variables and limitations of the classical sedimentation method, thanks to the Capillary Photometry technology</p>
            <MDBRow className="align-items-center justify-content-evenly">


                <MDBCol className="mt-4" lg={6}>
                    <img src={product0} className="w-100" alt="" />
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <ul>
                        <li>Only 175 μl of analysed sample</li>
                        <li>Up to 120 samples capacity</li>
                        <li>Up to 195 tests/h</li>
                        <li>Continuous loading</li>
                        <li>Tubes loading without barcode alignment</li>
                        <li>INDEPENDENT STAT channel for low volume and urgent sample with external withdraw probe</li>
                        <li>Auto washing system</li>
                        <li>Connection available for Total Lab Automation systems</li>
                        <li>Remote Access</li>
                        <li>Internal camera</li>
                        <li>No maintenance on Operator side</li>
                        <li>Multi-level access with personalised GDPR compliant</li>
                    </ul>

                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <MDBCol className="mt-2" lg={12}>
                    <h3>Capillary Photometry technology overcomes the majority of the variables and limitations of the classical sedimentation method</h3>
                    <ul>
                        <li>Stabilized temperature at 37°C</li>
                        <li>No dilution</li>
                        <li>Use of EDTA tube direct from CBC</li>
                        <li>New standardized reading unit</li>
                        <li>Automated mixing step</li>
                        <li>Latex Controls and Calibrators available</li>
                        <li>External Quality Control available</li>
                        <li>High reproducibility</li>
                        <li>Excellent correlation with the reference method</li>
                    </ul>
                    <p>Alifax technology is classified by CLSI guidelines as an alternative method for ESR (H02-A5 Vol. 31, N.11)</p>
                </MDBCol>

                <MDBCol className="mt-4 " lg={12}>
                    <h1>ESR in less than 20 SECONDS</h1>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={12}>
                    <p>The instrument measures the different intensity of light due to the aggregation of red cells when inflammation is present</p>
                </MDBCol>

                <MDBCol className="mt-4" lg={12}>
                    <h3>“ESR measurements by TEST1 reflect inflammation better than do those by the Westergen method in patients with malignancy, autoimmune disease, or infection”</h3>
                    <p>YOUNG JOO CHA</p>
                    <p>MD, Depart. Of Lab Medicine, Chung-Ang University Hospital, Seoul, Korea</p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h3>ROLLER Family Instruments</h3>
                    <p>The compact Alifax solution for small laboratories. The ROLLER models perform automatic and manual sampling for low samples and uncapped tubes</p>
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


export default Lab2;