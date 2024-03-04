import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product8.png";
import product2 from "../../histopothologyImg/prod8.9.png";
import product3 from "../../histopothologyImg/prod8.1.png";
import product4 from "../../histopothologyImg/prod8.2.png";
import product5 from "../../histopothologyImg/prod8.3.png";
import product6 from "../../histopothologyImg/prod8.4.png";
import product7 from "../../histopothologyImg/prod8.5.png";
import product8 from "../../histopothologyImg/prod8.6.png";
import product9 from "../../histopothologyImg/prod8.7.png";
import product10 from "../../histopothologyImg/prod8.8.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist8() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>Embedding cassettes</h1>
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

                <p className="mt-4  fw-bold">Dakewe’s HistoFlo™ cassettes are engineered to optimize print quality when used with C100 series cassette printers from Dakewe. The cassettes allow efficient processing and specimen safety. HistoFlo™ cassettes are made of P.O.M materials and resistant to common processing chemicals and heat.</p>


                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product3} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong> Slotted</p>
                        <p><strong>Open:</strong> Front open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div>
                                    <p><strong>002019</strong></p>
                                    <p>90 pcs/tube</p>
                                    <p>loose packed lids</p>
                                </div>
                                <div>
                                    <p><strong>002009</strong></p>
                                    <p>75 pcs/tube</p>
                                    <p>attached lids</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product4} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong> Slotted</p>
                        <p><strong>Open:</strong> Back open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div >
                                    <p><strong>002019</strong></p>
                                    <p>90 pcs/tube</p>
                                    <p>loose packed lids</p>
                                </div>
                                <div>
                                    <p><strong>002009</strong></p>
                                    <p>75 pcs/tube</p>
                                    <p>attached lids</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCol>


                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product5} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong> Square</p>
                        <p><strong>Open:</strong> Front open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div >
                                    <p><strong>012019</strong></p>
                                    <p>90 pcs/tube</p>
                                    <p>loose packed lids</p>
                                </div>
                                <div>
                                    <p><strong>012009</strong></p>
                                    <p>75 pcs/tube</p>
                                    <p>attached lids</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCol>


                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product6} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong> Slotted</p>
                        <p><strong>Open:</strong> Front open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div >
                                    <p><strong>001009</strong></p>
                                    <p>One-piece: 200 cassetes/tape</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product7} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong> Square</p>
                        <p><strong>Open:</strong> Front open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div>
                                    <p><strong>011009</strong></p>
                                    <p>One-piece: 200 cassettes/tape</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product8} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong> Slotted</p>
                        <p><strong>Open:</strong> Front open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div>
                                    <p><strong> 031000</strong></p>
                                    <p>One-piece: 200 cassettes/tape</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product9} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong> Round</p>
                        <p><strong>Open:</strong>  Back open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div >
                                    <p><strong>022129</strong></p>
                                    <p>90 pcs/tube</p>
                                    <p>no lid</p>
                                </div>
                                <div>
                                    <p><strong>012009</strong></p>
                                    <p>75 pcs/tube</p>
                                    <p>attached lids</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol className="justify-content-evenly mt-4" lg={5} style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <img src={product10} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div  >
                        <p><strong>Pore:</strong>Mesh</p>
                        <p><strong>Open:</strong>Black open</p>
                        <div style={{ marginTop: '10px' }}>
                            <div className="d-flex justify-content-evenly"  >
                                <div >
                                    <p><strong>032109</strong></p>
                                    <p>80 pcs/tube</p>
                                    <p>attached lids</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </MDBCol>

             


            </MDBRow>

        </MDBContainer>
    )
}


export default Hist8;