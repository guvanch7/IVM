import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product13 from '../../citologyImg/product13.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod13() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>LTS-T1000-SPECIFIC PROTEIN ANALYZER</h1>
            <MDBRow className="justify-content-center align-items-center">
                <MDBCol lg={5}>
                    <img src={product13} className="w-100" alt="" />

                </MDBCol>


                <MDBCol lg={7}>
                    <p className="">
                        Applicable to quantitative detection of specific proteins in serum, blood, plasma, urine, etc.
                    </p>



                    <p> <b>Features <br /></b>
                        Employ nephelometric immunoassay for several parameters testing;
                        <br />
                        High accuracy and broad linearity;
                        <br />
                        Four channels simultaneously detect different parameters without interference;
                        <br />
                        Real-time test, result in20 seconds to 3 minutes;
                        <br />
                        Calibration by swiping card, easy and flexible operation;
                    </p>

                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                    

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


export default Prod13;