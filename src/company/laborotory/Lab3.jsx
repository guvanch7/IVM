import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../assets/labImg/product3.png"
import product2 from "../../assets/labImg/prod3.1.png"


import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Lab3() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>3S Safe Sampling Systems</h1>
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product1} className="w-100" alt="" />
                </MDBCol>
                <MDBCol className="mt-4" lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>
                
                <p className="text-center"><b>STORAGE SOLUTION FOR ALL LABORATORIES PRODUCING BETWEEN 50 AND 1,000 BIOLOGICAL SAMPLES A DAY</b></p>
                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <MDBCol className="mt-4" lg={12}>
                    <p>Hospitals and clinical diagnosis, Biomedical analysis laboratories, Blood banks and transfusion centers, Pharmaceutical and research laboratories, Toxicology centers, Biobanks, … iLsa, the sample storage system market leader, has developed the 3S Safe Sampling Systems to :</p>
                    <ul>
                        <li>Perfectly match the requirements of CERTIFICATION</li>
                        <li>DIVIDE BY 4 your storage volumes</li>
                        <li>REDUCE COSTS of your sample storage system</li>
                    </ul>
                    <h3>THE ORIGINALITY OF THE 3S SYSTEM (SAFE SAMPLING SYSTEMS) IS ITS PATENTED MICROPLATE.</h3>

                    <p>The originality of the 3s system (safe sampling systems) is its patented microplate. It is a monoblock microplate with extractible wells. The microplate is identified with a unique number printed in the factory (bar code) and each well is also identified with this same number to which is added its position on the microplate (DataMatrix). Each well has therefore its own unique identification. This original configuration simplifies your sample storage system management.</p>
                    <p>The system includes :</p>
                    <ul>
                        <li>Several microplate models: 48 or 96 wells of 500 or 1000 µl</li>
                        <li>Neo Robot for sample transfer from primary tube to microplate well. Neo Robot also enables tube-to-tube aliquoting.</li>
                        <li>Neo Manager software for sample management (freezer configuration, expiry data management, sample traceability, etc…). Your sample storage system is easy to control using a simple-to-use touch screen</li>
                        <li>Other accessories to simplify your sample storage system management – label printer, bar code reader, DataMatrix reader, etc.</li>
                    </ul>

                    <p>A few hours training is all that is required to train your operators. The system is controlled via a PC touch screen.</p>
                    <p>The use of disposable and capacitive tips allows to avoid any contamination and to check the aliquoted volume. Its anti-intrusion barrier, its MTBF and its intelligent sampling make this automat a reliable and robust device.</p>
                    <p>The management of primary tubes and microplates by barcodes and wells by DataMatrix avoid any human error.</p>
                    <p><b>This automated system is an essential element in obtaining your laboratory certification.</b></p>
                </MDBCol>















                <MDBCol className="mt-4" lg={12}>
                    <h1>HOW DOES THE SYSTEM WORK ?</h1>
                    <ol>
                        <li>The primary tubes and the microplates placed in the system are identified by bar-code.</li>
                        <li>Neo Robot takes a disposable tip/capacitive sensor for each tube, which carries out a double detection test before taking the desired sample volume.</li>
                        <li>The sample is then placed in the microplate well.</li>
                        <li>Once all tubes have been aliquoted, the microplate wells are closed. This microplate is then ready for storage in your freezer, once it has been configured in Neo Manager.</li>
                    </ol>
                    <p><b>Neo Robot is a pre/post analysis automat. It can therefore be integrated at any stage in your total chain. It is connected to LIS/LIMS.</b></p>
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>MAJOR ADVANTAGES</h1>
                    <ul>
                        <li>Space savings in freezer</li>
                        <li>Space savings due to SBS microplate format</li>
                        <li>Full traceability throughout sample life</li>
                        <li>Simple and easy to use</li>
                        <li>Compatible with standard LIS/LIMS</li>
                        <li>No contamination due to use of disposable tips</li>
                        <li>Controlled/secure sample identification</li>
                        <li>Automatic storage/backup</li>
                        <li>Real-time distribution monitoring</li>
                        <li>100% designed and manufactured in France</li>
                    </ul>
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <table style={{ borderCollapse: 'collapse', border: '1px solid black', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Weight</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>75 kgs</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Sizes</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Length: 114 cm, Width: 90 cm, Height: 98 cm</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Capacity</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>196 tubes, 4 microplates</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Input</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>3 sockets: 2 USB and 1 RJ45; 150 Watts</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Mark</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>CE</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '8px' }}>HMI</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>PC with 23 inch touch screen</td>
                            </tr>
                        </tbody>
                    </table>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    )
}


export default Lab3;