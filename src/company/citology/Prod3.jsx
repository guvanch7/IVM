import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product3 from '../../citologyImg/product3.png'
import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Prod3() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>IDC-20</h1>
            <MDBRow className="justify-content-center">
                <MDBCol lg={5}>
                    <img src={product3} className="w-100" alt="" />

                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>
                
                <MDBCol lg={12}>
                    <p>
                        The instrument, thanks to a double centrifugation and an integrated turbidity reading, allows a homogeneous, monolayer and reproducible spreading.
                    </p>



                    <p>The instrument has a re-spread rate of less than 2% thanks to its low cell concentration detection system and its mucus detection control system, making the IDC20 one of the most robust machines on the market.</p>


                    <p>
                        No specialized personnel are required to operate the instrument. A one-hour training session is enough to train your technician. The machine is controlled by a touch pad with a simplified interface.
                    </p>

                    <p>
                        The management of the samples by bar codes allows to avoid any human error.
                    </p>

                    <p>
                        The automated system becomes an essential link in your NF EN 15189 certification.
                    </p>


                    <h2>HOW DOES THE MACHINE WORK ?</h2>

                    <ol>
                        <li>The samples and identified slides are loaded on the machine.</li>
                        <li>A “diluant/sticker” liquid is deposited on the slides.</li>
                        <li>For each patient, after checking the barcodes, the IDC20 takes 1ml of liquid with a disposable tip and checks the cell density.</li>
                        <li>It deposits the necessary quantity on the slide.</li>
                        <li>A first centrifugation deposits the cells on the slides. The “diluant/Sticker” gradiant liquid allows to eliminate a part of the undesirable elements (red blood cells, dust, pieces of membranes, …).</li>
                        <li>After emptying the supernatant, a second centrifugation allows the final sticking of the cells and the drying of the slide.</li>
                        <li>Slides come out of the machine ready for staining.</li>
                    </ol>


                    <h2>CHRONOLOGY OF IDC20 OPERATION</h2>


                    <ul>
                        <li>iDC 20 reads the bar codes to check the correct match between slides and specimen bottle !</li>
                        <strong>No risk of error possible ! Total traceability</strong>
                        <li>If they match, IDC20 uses a disposable tip to draw 1ml of liquid from the sample vial following re-suspension.</li>
                        <strong>Disposable tip = no risk of contamination !</strong>
                        <li>Turbidity is then determined in the disposable tip by infra-red sensors Integrated infra-red !</li>
                        <strong>Accurate cell concentration measurement !</strong>
                        <li>Depending on the result, iDC 20 adapts the volume of sample distributed on the slide to ensure quantity of cells is always correct.</li>
                        <strong>Standardization of cell concentration !</strong>
                        <li>An initial slow centrifuge is engaged to spread the cells on the slide.</li>
                        <strong>Allowing a homogeneous slide quality and a monolayer spot !</strong>
                        <li>Followed by supernatant evacuation by disposable tips to remove the maximum of impurities: mucus, pieces of membranes, blood…</li>
                        <strong>Still no contamination risk</strong>
                        <li>A second faster centrifugation sticks cells to the slide and then dries it.</li>
                        <strong>Your slide is ready for staining !</strong>
                        <li>For each slide, IDC20 records all operations performed : date, time, bar codes read, turbidity, user…</li>
                        <strong>IDC20 helps you achieve your NF EN 15189 certification !</strong>
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


export default Prod3;