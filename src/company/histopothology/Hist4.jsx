import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product4.png";
import product2 from "../../histopothologyImg/prod4.1.png";
import product3 from "../../histopothologyImg/prod4.2.png";
import product4 from "../../histopothologyImg/prod4.3.png";
import product5 from "../../histopothologyImg/prod4.4.png";
import product6 from "../../histopothologyImg/prod4.5.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist4() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>HP300 Plus Tissue Processor</h1>
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product1} className="w-100" alt="" />

                </MDBCol>
                <MDBCol className="mt-4" lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>
                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <p><b>Designed with safety and innovation in mind, Dakewe HP300 Plus tissue processor is engineered to enable a smooth and effective workflow for your laboratory.</b></p>

                <MDBCol className="mt-4" lg={6}>
                    <h1>Reliability</h1>
                    <h4>Self-test</h4>
                    <p><b>Automatically check key operation parameters before the process starts, minimizing the possibility of malfunction from the beginning.</b></p>
                    <h4>Dual air pump system</h4>
                    <p><b>Two air pumps can work individually or jointly to ensure instrument accountability.</b></p>
                    <h4>Dual temperature sensors</h4>
                    <p><b>Shift control algorithm spontaneously to provide excellent temperature control.</b></p>
                    <h4>Component monitoring</h4>
                    <p><b>Real-time monitoring of components and parameter settings. Together with intelligent analysis and precaution, further offers great overall performance.</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product4} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Operation</h1>
                    <h4>Auto electric lock</h4>
                    <p><b>Power failure protection: memorize the current processing step on account of a power failure; immerse samples in safe reagent if UPS is connected</b></p>
                    <h4>Retort lid heating</h4>
                    <p><b>Backup Temperature Control Dual-sensor temperature control, auto-switch in control algorithm.</b></p>
                    <h4>Back-lit reagent cabinet</h4>
                    <p><b>Blue lights illuminate reagent bottles, know liquid level at a glance.</b></p>
                    <h4>Cleaning xylene pre-heating</h4>
                    <p><b>Heating module under cleaning xylene bottles can heat to 40 - 55℃, further improving cleaning performance and efficiency.</b></p>
                    <h4>Twice wax draining</h4>
                    <p><b>Drain wax a second time before xylene cleaning to reduce wax residue and save cleaning reagents</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Specimen safety</h1>
                    <h4>Cloud remote monitoring</h4>
                    <p><b>Have the status in control even while away, remind via multiple methods when a risk is detected.</b></p>
                    <h4>Automatic Concentration Monitoring (ACM)</h4>
                    <p><b>On-board high precision sensors detect alcohol concentration to prevent incorrect replenishment.</b></p>
                    <h4>Ceramic rotary valve</h4>
                    <p><b>Heat-resistant ceramic valve significantly reduces blockage caused by wax attachment and thus promotes the stability and accuracy of liquid delivery.</b></p>
                    <h4>Ultrasonic sensors</h4>
                    <p><b>Ultrasonic sensors unaffected by wax build ups are able to provide correct liquid level information consistently.</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product5} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product6} className="w-100" alt="" />
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


                <MDBCol lg={12}>
                    <h1>Specifications</h1>

                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                        <tbody>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Rated voltage and frequency</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>100 - 120 VAC / 220 - 240 VAC, 50/60 Hz</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Rated power</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>1200 VA</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Operating temperature</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>+10°C to +40°C</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Dimension (W × D × H)</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>620 × 640 × 1170 mm</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Weight (without reagents)</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Approx. 180 kg</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Retort capacity</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Maximum 300 cassettes in 2 sample baskets</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Paraffin reservoirs</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>3 small, 1 large</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Paraffin reservoir volume</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Small: 4.2 L; large: 5.6 L</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Reagent bottles</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>10</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Cleaning reagent bottles</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>3</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Condensate bottle</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>1</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Reagent bottle volume</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>3 levels: 3 L, 4.3 L, 4.8 L. Maximum 5 L</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Temperature (paraffin)</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>50 – 65°C</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Temperature (processing reagents)</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Up to 65°C</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Temperature (rinsing reagents)</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Up to 65°C</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Level sensors</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>3 ultrasonic sensors</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Reagent concentration monitoring</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Reagent bottle intelligent recognition</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Paraffin purification</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Dual pump</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Remote fill & drain</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Cleaning reagent pre-heating</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </MDBCol>


            </MDBRow>

        </MDBContainer>
    )
}


export default Hist4;