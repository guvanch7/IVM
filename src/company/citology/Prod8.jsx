import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product8 from '../../citologyImg/product8.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod8() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>LTS-E100-FECES ANALYSIS & PROCESSING SYSTEM</h1>
            <MDBRow className="justify-content-center align-items-center">
                <MDBCol lg={5}>
                    <img src={product8} className="w-100" alt="" />

                </MDBCol>


                <MDBCol lg={7}>
                    <p className="">
                        Applicable to automatically diagnosis of stool routine examination.
                    </p>



                    <p> <b>Features <br /></b>
                        Several patents techniques, full-auto detection & operation;

                        <br />

                        Simulated manual microscopy smearing to ensure depth of field;

                        <br />

                        40 specimens per run, emergency detection available; 50 T/hour;

                        <br />

                        3 test items together or any combination applicable at the same time;

                        <br />
                    </p>

                    <p> <b>Test Items:<br /></b>
                      
                        Physical test: stool routine examination, color and properties;
                        <br />

                        Chemical test: Fecal occult blood, Helicobacter pylori, Rotavirus,

                        <br />

                        Adenovirus, Rotavirus & adenovirus 2 in 1.

                        <br />
 
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


export default Prod8;