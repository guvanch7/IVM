import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import product1 from "../../histopothologyImg/product2.png";
import product2 from "../../histopothologyImg/prod2.4.png";
import product3 from "../../histopothologyImg/prod2.1.png";
import product4 from "../../histopothologyImg/prod2.2.png";
import product5 from "../../histopothologyImg/prod2.3.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist1() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>S200 Slide Printer</h1>
            <p><b>Featuring non-contact UV laser marking technology, Dakewe SurePrint S200 slide printer offers fast, rich content and consumable-free printing. The innovative upward slide delivery system allows smooth and safe transport of slides. The printing is crisp and permanent, resists processing solvents, reducing errors and enabling traceability.</b></p>
            <hr className="linee" />
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>
                <MDBCol lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="addEff2 btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <h6 className="text-muted">Designed with safety and innovation in mind, Dakewe HP300 Plus tissue processor is engineered to enable a smooth and effective workflow for your laboratory.</h6>
                <MDBCol className="mt-4" lg={6}>
                    <h1>High tech printing technology.</h1>
                    <p><b>Thanks to the non-contact UV laser marking technology, S200 offers:</b></p>
                    <ul>
                        <li>
                            <strong>High printing speed:</strong> as fast as — seconds per slide
                        </li>
                        <li>
                            <strong>Crisp print:</strong> 2500 dpi high resolution and great scan rate
                        </li>
                        <li>
                            <strong>Minimal maintenance:</strong> non-contact printing results in little to none maintenance
                        </li>
                        <li>
                            <strong>Rich content:</strong> Alphanumeric, multiple languages, symbols, 1D & 2D codes, graphics
                        </li>
                    </ul>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product4} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Innovative upward slide delivery.</h1>
                    <p><b>Gravity-driven delivery system are prone to break the slides and induce blockage.</b></p>
                    <p><b>This will never happen in S200 as it implants upward slide delivery system, slides are delivered upwards and then horizontally to the printing area, eliminating possibility of slide fragmentation.</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Dual input, dual output.</h1>
                    <p><b>Dual input, double selection — with two loading hoppers, S200 can store two types of slides separately</b></p>
                    <p><b>Large capacity — 200-slide capacity offers relief from repetitive reloading</b></p>
                    <p><b>Dual output, double printing modes — upper slot for on-demand printing and lower hopper for batch printing, accommodate your laboratory routine</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Easy and safe operation.</h1>
                    <p><b>User safety— triple-layer filters in the air purification system keep odor and dust away from operator</b></p>
                    <p><b>Front loading feature — convenient loading and unloading</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                </MDBCol>




                <MDBCol className="mt-5" lg={12}>
                    <h1>Specifications</h1>
                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                        <tbody>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Printing technology</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Non-contact ultraviolet laser marking technology</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Print mode</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>On-demand and batch printing</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Loading hopper quantity</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>2</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Loading hopper capacity</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>100 slides in each hopper</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Output hopper capacity</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>50 slides</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Print speed</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Up to 5 seconds/slide</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Air purification</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Built-in activated carbon air purification system</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>System interface</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>LIS, HIS, PIS, PACS</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Printer interface</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>USB and Ethernet</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Power requirements</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>AC 100 - 240 V, 50/60 Hz, 210 VA</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Dimensions (W×D×H)</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>240 × 440 × 450 mm</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Approx. 32.5 kg</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Operating systems</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Win 7, Win 10, Linux</td>
                            </tr>
                        </tbody>
                    </table>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    )
}


export default Hist1;