import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

import bacteriology from '../assets/bacteriology.png'
import citology from '../assets/Citology.png'
import histology from '../assets/Histology.png'
import item from '../assets/item.png'


function Responsibilities() {


    return (
        <>

            <MDBContainer>
                <h3 className="mt-4 text-center">Our areas - the source of innovation and top-quality outcomes.</h3>
            </MDBContainer>


            <MDBContainer fluid className="mt-5 uniqueRight">
                <MDBContainer className="">

                    <MDBRow className="align-items-center">

                        <MDBCol lg={4}>
                            <img src={bacteriology} className="img-fluided w-100" />
                        </MDBCol>

                        <MDBCol lg={8}>
                            <h2>
                                Innovations in Bacteriology: Pathway to Health and Sustainability
                            </h2>

                            <p>

                            Our comprehensive bacteriology solutions make it easier for technicians to do their jobs and get results faster. Our solutions include advanced bacteriology technology and equipment. Our comprehensive approach is customized to each client, which will enable the development of the laboratory.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
 

            <MDBContainer fluid className="mt-5 p-5 uniqueLeft">
                <MDBContainer className="">

                    <MDBRow className="align-items-center">



                        <MDBCol lg={8}>
                            <h2>
                                Innovative Cytology Equipment: Maximizing Precision and Efficiency in Research
                            </h2>

                            <p>
                            Our comprehensive cytology solutions make your work easier and results faster. We are committed to providing our customers with advanced cytology technologies and solutions that help them maximize the efficiency and accuracy of their work.
                            </p>
                        </MDBCol>


                        <MDBCol lg={4}>
                            <img src={citology} className="img-fluided w-100" />
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>

            </MDBContainer>


            <MDBContainer fluid className="my-5 uniqueRight">
                <MDBContainer className="">

                    <MDBRow className="align-items-center">

                        <MDBCol lg={4}>
                            <img src={bacteriology} className="img-fluided w-100" />
                        </MDBCol>

                        <MDBCol lg={8}>
                            <h2>
                                Cutting-Edge Histology Equipment: Precision Tissue Analysis
                            </h2>

                            <p>
                                Our company provides cutting-edge equipment for histology, the study
                                of tissues and their microscopic structure. We offer a comprehensive
                                range of instruments necessary for histological research, including
                                tissue processors, microtomes, staining systems, and slide scanners.
                                With our advanced technologies and solutions in histology, we aim to
                                support researchers and professionals in achieving precise and
                                insightful analyses of tissue samples.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
        </>
    );



}

export default Responsibilities;