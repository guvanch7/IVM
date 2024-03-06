import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product5.png";
import product2 from "../../histopothologyImg/prod5.1.png";
import product3 from "../../histopothologyImg/prod5.2.png";
import product4 from "../../histopothologyImg/prod5.3.png";
import product5 from "../../histopothologyImg/prod5.4.png";
import product6 from "../../histopothologyImg/prod5.5.png";
import product7 from "../../histopothologyImg/prod5.6.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist5() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>MT1 Semi-automated rotary microtome</h1>
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product1} className="w-100" alt="" />

                </MDBCol>
                <MDBCol className="mt-4" lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="addEff2 btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <p><b>Dakewe MT1 semi-automated rotary microtome offers quality sections and effortless experience with engineered mechanism and ergonomic design, adapting to the need of every microtomists in the laboratory.</b></p>

                <MDBCol className="mt-4" lg={6}>
                    <h1>Precision oriented</h1>
                    <ul>
                        <li><b>±8° X/Y orientation with clear graduation enables fast alignment of the specimens.</b></li>
                        <li><b>Patented 0 position indicator with pleasant motion feedback.</b></li>
                        <li><b>Coarse feed wheel with pleasant motion feedback.</b></li>
                        <li><b>Position memory function brings specimen head to desired position in one touch.</b></li>
                        <li><b>Motorized system offers steady and even-speed movement.</b></li>
                    </ul>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product4} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Ergonomics infused</h1>
                    <ul>
                        <li><b>Smooth-running and light hand wheel thanks to expertly designed force balance system.</b></li>
                        <li><b>Thumb design on the hand wheel for the thumb to rest on amid heavy workload.</b></li>
                        <li><b>Large volume, removable waste tray with slope interior for effortless cleaning.</b></li>
                        <li><b>Rounded corner in every corner protects laboratory technicians.</b></li>
                        <li><b>Bottom glider makes cleaning easier.</b></li>
                    </ul>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Adapt to users</h1>
                    <ul>
                        <li><b>Rocking mode allows trimming without a full rotation of handwheel, reducing fatigue.</b></li>
                        <li><b>Smart switch between rocking mode and sectioning.</b></li>
                        <li><b>3-in-1 coarse feed wheel with reversible wheel direction adapts to the microtomists’ preference.</b></li>
                        <li><b>5 inch touch screen with concise UI and physical control panel allow intuitive control.</b></li>
                        <li><b>2-in-1 blade holder for high and low profile blades.</b></li>
                    </ul>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product5} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product6} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Engineered mechanisms</h1>
                    <ul>
                        <li><b>Ultra-precise, sleek rail with cross roller bearings and force balance system bring ultimate sectioning</b></li>
                        <li><b>experience and reliability</b></li>
                        <li><b>Fine step angle stepper motor for precise sectioning</b></li>
                        <li><b>Dovetail groove blade holder base guarantees stable, wobbling-free operation</b></li>
                        <li><b>Double lock ensures safety</b></li>
                    </ul>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Joint effort of engineering and art</h1>
                    <ul>
                        <li><b>Two appearances available</b></li>
                        <li><b>Enlighten the laboratory with a bit of color and art</b></li>
                    </ul>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product7} className="w-100" alt="" />
                </MDBCol>


                <MDBCol lg={12}>
                    <h1>Specifications</h1>

                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                        <tbody>
                            <tr>
                                <th style={{ padding: '8px' }}>General</th>
                                <td style={{}}></td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Power</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>100 - 240 VAC, 50/60 Hz</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Maximum consumption</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>50 VA</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Dimension (W×D×H)</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>490 × 570 × 306 mm</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>5 inch color touch screen</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Control panel</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Waste tray</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>2000 mL volume, antistatic</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Microtome</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}></td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Section thickness range</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>0.5 - 100 μm</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Setting values</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>For 0.5 - 5 μm in 0.5 μm increments<br />For 5 - 20 μm in 1 μm increments<br />For 20 - 60 μm in 5 μm increments<br />For 60 - 100 μm in 10 μm increments</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Trimming thickness range</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>1 - 600 μm</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Setting values</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>For 1 - 10 μm in 1 μm increments<br />For 10 - 20 μm in 2 μm increments<br />For 20 - 50 μm in 5 μm increments<br />For 50 - 100 μm in 10 μm increments<br />For 100 - 600 μm in 50 μm increments</td>
                            </tr>
                        </tbody>
                    </table>
                </MDBCol>


            </MDBRow>

        </MDBContainer>
    )
}


export default Hist5;