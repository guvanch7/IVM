import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from '../../citologyImg/product1.png'
import product2 from '../../citologyImg/Prod1.1.png'
import product3 from '../../citologyImg/Prod1.2.jpg'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod1() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>AUTOMATED SYSTEM FOR CYTOLOGY LABORATORIES FROM 40.000 TESTS/YEAR</h1>
            <MDBRow className="justify-content-center">
                <MDBCol lg={5}>
                    <img src={product1} className="w-100" alt="" />

                </MDBCol>
                <MDBCol lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="addEff2 btn btn-primary ">Send enquiry</Link>
                </MDBCol>
                
                <MDBCol>
                    <p>
                        <b>Cell Expert</b>  is a high speed instrument with automatic opening and closing of specimen vials. It has many other very competitive advantages :
                    </p>

                    <ul>
                        <ul>
                            <li>Brush in the bottle: 100% of collected cells are sent to the laboratory</li>
                            <li>Possibility of spreading several slides for the same sample</li>
                            <li>A secure process:
                                <ul>
                                    <li>Zero risk of contamination due to the use of disposable tips and chambers.</li>
                                    <li>Any operating error is detected and flagged up, slides and specimen bottles are identified with same barcodes, barcodes are read before picking and dispensing, software meets standard 62304 requirements.</li>
                                </ul>
                            </li>
                            <li>The cell concentration is identical to the integrated centrifugation of the collection pots and then dilution and calculation of the cell concentration by turbidity reading.</li>
                            <li>Small size of GYN specimen bottle (diameter under 30 mm) for posting</li>
                            <li>Non-toxic preservative liquid (without methanol and without formaldehyde)</li>
                            <li>Ergonomic instrument for quick and easy handling (training of 2 hours maximum)</li>
                            <li>High speed 50 slides/hour with automatic opening of the sample bottles</li>
                            <li>Full traceability: all data is stored</li>
                            <li>Cell Expert fully automates Gyn and Non Gyn sampling</li>
                            <li>Immuno-cytochemical test possibility: liquid retains a good cell structure for immuno-cytochemical testing</li>
                        </ul>
                    </ul>

                    <p><b>Cell Expert </b> also offers an option for HPV testing in molecular biology :</p>
                    <ul>
                        <li>Automated aliquoting for HPV tubes with throughput of 80 tubes/hour</li>
                    </ul>

                    <p>Sizes : 67 cm (length) X 56 cm (width) ; <br />
                        Weight : 62 kgs
                    </p>

                    <img src={product3} className="" alt="" />
                    <p>Consumables Cell Expert :</p>
                    <ul>
                        <li>Specimen bottle</li>
                        <li>Brush</li>
                        <li>Slide</li>
                        <li>Centrifuge chamber</li>
                        <li>Tips</li>
                    </ul>


                    {/* <form>
                            <MDBRow className='mb-4'>
                                <MDBCol>
                                    <MDBInput id='form6Example1' label='First name' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput id='form6Example2' label='Last name' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
                            <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
                            <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
                            <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

                            <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

                        

                            <MDBBtn className='mb-4 w-25 ' type='submit' block>
                                Send
                            </MDBBtn>
                        </form> */}
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}


export default Prod1;