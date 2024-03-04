import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import product1 from "../../histopothologyImg/product1.png";
import product2 from "../../histopothologyImg/prod1.1.png";
import product3 from "../../histopothologyImg/prod1.2.png";
import product4 from "../../histopothologyImg/prod1.3.png";
import product5 from "../../histopothologyImg/prod1.4.png";
import product6 from "../../histopothologyImg/prod1.5.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist1() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>C100 Cassette Printer</h1>
            <p><b>Dakewe SurePrint printers are one of the few printers using innovative non-contact cold laser marking technology to generate crisp and permanent print on various sorts of cassettes.</b></p>
            <hr className="linee" />
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>
                <MDBCol lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <h6 className="text-muted">Designed with safety and innovation in mind, Dakewe HP300 Plus tissue processor is engineered to enable a smooth and effective workflow for your laboratory.</h6>
                <MDBCol className="mt-4" lg={6}>
                    <h1>Unique cold laser printing technology</h1>
                    <p><b>This technology offers permanent and high resolution print (up to 2500 dpi) allows for great scannability and identification throughout cassettes’ life. Dakewe’s data matrix can contain over 100 alphanumeric characters.</b></p>
                    <h1>Exclusive cassette color recognition</h1>
                    <p><b>Built-in patented RGB color recognition allows the instrument to pull out the cassette of the required color automatically and save the fuzz from loading cassettes of different colors in corresponding hoppers.</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product4} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>High throughput, great results</h1>
                    <p><b>Dakewe C100 cassette printers marks cassettes at a rate of every 2.5 seconds, leading to an impressive throughput of 1440 cassettes marked per hour.</b></p>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Flexibility</h1>
                    <p><b>Powered by the built-in computer, C100 can be used as a standalone printer or conveniently connect to a computer or integrate with LIS/LIMS.</b></p>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product5} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product6} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Consumable free</h1>
                    <p><b>Say farewell to ink cartridges, ribbons and UV lights and the headaches when replacing and maintaining these consumables.</b></p>
                </MDBCol>


                <MDBCol className="mt-5" lg={12}>
                    <h1>Specifications</h1>
                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                        <tbody>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Printing technology</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Non-contact laser marking technology</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Print content</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Alphanumeric, characters in various languages, barcodes, patterns</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Printing speed</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Up to 2.5 sec/cassette (depending on print content)</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Cassette type</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>With/without lid attached</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Cassette angle</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Both 45° and 35°</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Filter</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Built-in purification system</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>System interface</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>LIS, HIS, PIS, PACS</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Operating systems</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Windows 7, Windows 10, Linux, MacOS</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Screen</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>8 inch LED touch screen</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Power</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>100 - 240 VAC, ± 10 %, 210 VA</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Load capacity</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>6 loading hoppers, up to 600 cassettes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Output organizer tray</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Up to 100 cassettes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Equipment dimension</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>420 * 380 * 395 mm</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Net weight</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Approx. 30 kg</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Built-in scanner</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Intelligent color recognition</th>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    )
}


export default Hist1;