import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Select from 'react-select'

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter, MDBTextArea
} from 'mdb-react-ui-kit';



const options = [
    { value: 'request', label: 'Request a quote/product information' },
    { value: 'customer', label: 'Customer service/technical support' },
]



function Modal({ modalName }) {

    const [centredModal, setCentredModal] = useState(false);

    const toggleOpen = () => setCentredModal(!centredModal);

    return (
        < >
            <MDBBtn className="text-center mt-3" onClick={toggleOpen}>{modalName}</MDBBtn>

            <MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Get a free consultation.</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
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





                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Send</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );


}

export default Modal;