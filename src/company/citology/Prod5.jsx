import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product5 from '../../citologyImg/product5.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod5() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>IDC Shaker</h1>
            <MDBRow className="justify-content-center">
                <MDBCol lg={5}>
                    <img src={product5} className="w-100" alt="" />

                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>
                <MDBCol lg={12}>
                    <p>
                        Shaker for specimen bottles to separate cells clusters and dissolve mucus, sources of defects of spreading by a vertical agitation.
                    </p>



                    <p>
                        Compact device with opening by the top. The iDC shaker can shake 40 specimen bottles simultaneously. Two trays are available for specimen bottles of diameters 26 and 36 mm.
                    </p>

                    <ul>
                        <li><strong>Very effective</strong> to obtain a homogeneous and fluid smear</li>
                        <li><strong> Easy to use</strong>  : one single button to start shaking…. That’s it</li>
                        <li><strong>Fast </strong> : only 2 minutes of shaking</li>
                        <li><strong>Adaptable </strong>  to various size of specimen bottles</li>
                    </ul>

                    <h2>SPECIFICATIONS :</h2>

                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '5px' }}><strong>Weight</strong></td>
                                <td style={{ border: '1px solid black', padding: '5px' }}>45 kgs</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '5px' }}><strong>Sizes</strong></td>
                                <td style={{ border: '1px solid black', padding: '5px' }}>LxDxH : 38 cm x 44 cm x 34 cm</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '5px' }}><strong>Capacity</strong></td>
                                <td style={{ border: '1px solid black', padding: '5px' }}>40 specimen bottles</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '5px' }}><strong>Type of bottles</strong></td>
                                <td style={{ border: '1px solid black', padding: '5px' }}>depending on trays, available diameters 26 and 36 mm</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '5px' }}><strong>Mark</strong></td>
                                <td style={{ border: '1px solid black', padding: '5px' }}>CE</td>
                            </tr>
                        </tbody>
                    </table>
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


export default Prod5;