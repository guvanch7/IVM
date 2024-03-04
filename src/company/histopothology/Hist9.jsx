import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product9.png";
import product2 from "../../histopothologyImg/prod9.1.png";
import product3 from "../../histopothologyImg/prod9.2.png";


import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist9() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>Microscope Slides</h1>
            <MDBRow className="align-items-center justify-content-evenly">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product1} className="w-100" alt="" />

                </MDBCol>
                <MDBCol className="mt-4" lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <p className="mt-4  fw-bold">Ideal for laser slide printers and coverslipping machines. Painted Dakewe logo pattern on the other end helps smooth transportation in the printers. The paint-coated end is resistant against common lab chemicals and suitable for all common sterilization methods.</p>
                <MDBCol className="mt-4" lg={6}>
                    <p>Ideal for laser slide printers and coverslipping machines. Painted Dakewe logo pattern on the other end helps smooth transportation in the printers.</p>
                    <p>The paint-coated end is resistant against common lab chemicals and suitable for all common sterilization methods.</p>
                </MDBCol>

                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>
                <MDBCol lg={12}>
                    <h1>Specifications</h1>
                    <table style={{ borderCollapse: 'collapse', border: '1px solid black', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}></td>
                                <td style={{ padding: '8px', border: '1px solid black' }}><strong>Dakewe HistoFlo™ microscope slides</strong></td>
                                <td style={{ padding: '8px', border: '1px solid black' }}><strong>Dakewe HistoFlo™ adhesion microscope slides</strong></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Cat. No.</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>7109030A</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>DKWAS001A</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Coating</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>General</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Strong tissue adherence</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Dimensions (W × L)</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>25 × 75 mm</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>25 × 75 mm</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Thickness</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Approx. 1.0 mm</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Approx. 1.0 mm</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Edge</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Ground 45°</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Ground 45°</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Corner</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Cut corner</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Cut corner</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Specs</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>50 slides/box</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>50 slides/box</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Color</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Paint coated, multiple colors</td>
                                <td style={{ padding: '8px', border: '1px solid black' }}>Paint coated, multiple colors</td>
                            </tr>
                        </tbody>
                    </table>
                </MDBCol>


            </MDBRow>

        </MDBContainer>
    )
}


export default Hist9;