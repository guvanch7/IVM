import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product14 from '../../citologyImg/product14.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod14() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>LTS-T2000- SPECIFIC PROTEIN ANALYSIS SYSTEM</h1>
            <MDBRow className="justify-content-center align-items-center">
                <MDBCol lg={5}>
                    <img src={product14} className="w-100" alt="" />

                </MDBCol>


                <MDBCol lg={7}>
                    <p className="">
                        Applicable to quantitative detection of specific proteins in serum, blood, plasma, urine, etc.
                    </p>



                    <p> <b>Features <br /></b>
                        Full-auto nephelometric detection of specific proteins;

                        <br />
                        High accuracy & excellent stability;
                        <br />
                        30 specimens position, emergency testing available;
                        <br />
                        Real-time detection, 120 Tests/Hour;
                        <br />
                        20 reagents position, test items random for any combination;
                        <br />
                        Auto loading of reagent information and cabration;
                        <br />
                        Auto clean cuvette to prevent cross contamination;



                    </p>

                    <Link to={'/contact'} className="addEff2 btn btn-primary ">Send enquiry</Link>
                     
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


export default Prod14;