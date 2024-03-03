import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product3.png";
import product2 from "../../histopothologyImg/prod3.1.png";
import product3 from "../../histopothologyImg/prod3.2.png";
import product4 from "../../histopothologyImg/prod3.3.png";
import product5 from "../../histopothologyImg/prod3.4.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist3() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>HP300 Plus Tissue Processor</h1>
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product2} className="w-100" alt="" />

                </MDBCol>
                <MDBCol className="mt-4" lg={5}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>
                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>
                <p><b>Dakewe’s HP300 tissue processor provides reliable processing results and stable operation. Combining with multi-level reagent management, component monitoring and trustworthy technologies, HP300 tissue processor allows you feel confident in the workflow.</b></p>

                <MDBCol className="mt-4" lg={6}>
                    <h1>Reliability</h1>
                    <p><b>Self-test: automatically check key operation parameters before the process starts, minimizing the possibility of malfunction from the beginning</b></p>
                    <p><b>Component monitoring: real-time monitoring of components and parameter settings. Together with intelligent analysis and precaution, further offers great overall performance</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Specimen safety</h1>
                    <p><b>Power failure protection: memorize the current processing step on account of a power failure; immerse samples in safe reagent if UPS is connected</b></p>
                    <p><b>Cloud remote monitoring: have the status in control even while away, remind via multiple methods when a risk is detected</b></p>
                    <p><b>Ceramic rotary valve: heat-resistant ceramic valve significantly reduces blockage caused by wax attachment and thus promotes the stability and accuracy of liquid delivery</b></p>
                    <p><b>Ultrasonic sensors: Ultrasonic sensors unaffected by wax buildups are able to provide correct liquid level information consistently</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Reagent Quality Managemen</h1>
                    <h4>Reagent Automatic Rotation</h4>
                    <p><b>Reagent/paraffin automatic rotation,comfortable at operation.</b></p>
                    <h4>Reagent reminder</h4>
                    <p><b>Automatic reminder in reagent bottles threshold, reduce misoperation.</b></p>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product4} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product5} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Ergonomic design</h1>
                    <h4>Auto electric lock</h4>
                    <p><b>Electric lock can be triggered on touch screen effortlessly and offers better sealing.</b></p>
                    <h4>Screen angle adjustable</h4>
                    <p><b>12.1 inch touch screen with adjustable viewing angle adapts to preferences</b></p>
                    <h4>Liquid Level Observation</h4>
                    <p><b>Back-lit reagent chamber brings a clear view of the reagents </b></p>
                    <h4>Easy to Clean</h4>
                    <p><b>Teflon coating and patented marble countertop are easy to clean and helps provide good processing results.</b></p>

                </MDBCol>


            </MDBRow>

        </MDBContainer>
    )
}


export default Hist3;