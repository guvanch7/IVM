import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product15 from '../../citologyImg/product15.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod15() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>LTS-IF80- IMMUNOFLUORESCENCE QUANTITATIVE ANALYZER</h1>
            <MDBRow className="justify-content-center align-items-center">
                <MDBCol lg={5}>
                    <img src={product15} className="w-100" alt="" />
                </MDBCol>


                <MDBCol lg={7}>
                    <p className="">
                        Employing time resolution fluorescence immunoassay techniques, used for quantitative detection of specific protein in human serum, plasma, whole blood, urine or other human body.
                    </p>



                    <p> <b>Features <br /></b>
                        Full-auto operation: dilute specimen, incubate and print results;


                        <br />
                        Auto-loading of reagents information & calibration,

                        <br />
                        no need to insert a card;

                        <br />
                        Compatible with wide parameters involving cardiac,

                        <br />
                        kidney and infections, etc;

                        <br />
                        20 channels for random combination of test parameters;

                        <br />
                        Reagents provide a QC code that contains test &

                        <br />
                        lost-specific information;
                        <br />
                        Connected with LIS system, capacities to store up to 600 results;





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


export default Prod15;