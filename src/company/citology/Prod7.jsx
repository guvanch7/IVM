import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product7 from '../../citologyImg/product7.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod7() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>LTS-V400 -VAGINITIS DETECTION SYSTEM</h1>
            <MDBRow className="justify-content-center align-items-center">
                <MDBCol lg={5}>
                    <img src={product7} className="w-100" alt="" />

                </MDBCol>


                <MDBCol lg={7}>
                    <p className="">
                        Applicable to analysis of vaginal secretion for screening and assisted diagnosis of vaginitis.
                    </p>

        

                    <p> <b>Features <br /></b>
                        Auto adding specimen, auto incubation, auto results interpretation <br />

                        Fast detection, batch detection 24T/20min; <br />

                        Real-time detection, 1-24samples can be detected when needed. <br />

                        Unique color identification module to ensure accuracy & reproducibility. <br />
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


export default Prod7;