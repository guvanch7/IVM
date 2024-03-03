import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import prodImg from '../prodImg/prod.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput,
    MDBCheckbox,MDBTextArea 

} from 'mdb-react-ui-kit';
import Select from 'react-select'
import { Link } from 'react-router-dom';



const options = [
    { value: 'request', label: 'Request a quote/product information' },
    { value: 'customer', label: 'Customer service/technical support' },
  ]
  



function ServiceThird() {
    return (
        <div>
            <MDBContainer>

                <MDBBtn className="mt-5" floating size='lg' tag='a'>
                    <Link to='/' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
                </MDBBtn>


                <MDBRow>
                    <MDBCol lg={6}>
                        <h2 className="mt-3 mb-4">Ask question</h2>
                        <hr className="linee" />
                        <p>
                            Our company managers will be delighted to answer your questions, provide
                            cost estimates for services, and prepare individual commercial proposals for you.
                        </p>
                    </MDBCol>

                    <MDBCol lg={6}>
                        <form>
                            <MDBRow className='mb-4'>
                                <MDBCol>
                                <Select placeholder={'Inquiry type'} options={options} />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput id='form6Example2' label='Name' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
                            <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
                            <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
                            <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
                            <MDBInput wrapperClass='mb-4' type='text' id='form6Example6' label='Country or Region' />

                            <MDBTextArea label='Additional information' id='textAreaExample' rows={4} />


                        

                            <MDBBtn className='mb-4 mt-3 w-25 ' type='submit' block>
                                Send
                            </MDBBtn>
                        </form>
                    </MDBCol>


                </MDBRow>

            </MDBContainer>
        </div>
    )
}


export default ServiceThird;