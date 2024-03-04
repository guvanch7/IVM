import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product4 from '../../citologyImg/product4.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod4() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>Paint Cell</h1>
            <MDBRow className="justify-content-center">
                <MDBCol lg={5}>
                    <img src={product4} className="w-100" alt="" />

                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>
                <MDBCol lg={12}>
                    <p>
                        PAINT CELL is made to automate your special staining, time consuming, hand-made in your laboratory.
                    </p>



                    <p>
                        The number of tanks and slides are sized to minimize cost.
                    </p>


                    <p>
                        iLSA made PAINT CELL as a minimalist and constraint-free automate : open to any stains, no maintenance contract. The touch screen tablet allows you to create and easily launch your staining :
                    </p>

                    <ol>
                        <li>- Load slides and tanks</li>
                        <li>- Choose the staining</li>
                        <li>- Click on the “Color” button</li>
                    </ol>
                    <p><b>That’s it !</b></p>

                    <p>This automate is A4-sized.</p>
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


export default Prod4;