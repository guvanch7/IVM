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

import bacteriology from '../assets/catalogsImg/catalog1.3.jpeg'
import citology from '../assets/catalogsImg/catalog1.1.jpg'
import histology from '../assets/catalogsImg/catalog1.2.jpg'
import item from '../assets/item.png'


function Responsibilities() {


    return (
        <>

            <MDBContainer>
                <h2 className="mt-4 text-center">Our Comprehensive Solutions</h2>
            </MDBContainer>


            <MDBContainer fluid className="mt-4 uniqueRight">
                <MDBContainer className="">

                    <MDBRow className="align-items-center p-5">

                        <MDBCol lg={4}>
                            <img src={bacteriology} className=" rounded-6 img-fluided w-100" />
                        </MDBCol>

                        <MDBCol lg={8}>
                            <h2>
                                Innovations in Bacteriology: Pathway to Health and Sustainability
                            </h2>

                            <p>

                                Our comprehensive bacteriology solutions make your work easier and results faster. Our solutions include advanced bacteriological technologies. Our comprehensive solutions are based on an individual approach for each laboratory.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>


            <MDBContainer fluid className="mt-5 p-5 uniqueLeft">
                <MDBContainer className="">

                    <MDBRow className="align-items-center p-5">



                        <MDBCol lg={8}>
                            <h2>
                                Innovative Cytology Equipment: Maximizing Precision and Efficiency in Research
                            </h2>

                            <p>
                                Our comprehensive cytology solutions make your work easier and results faster. We are committed to providing our customers with advanced cytology technologies and solutions that help them maximize the efficiency and accuracy of their work.
                            </p>
                        </MDBCol>


                        <MDBCol lg={4}>
                            <img src={citology} className="rounded-6 img-fluided w-100" />
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>

            </MDBContainer>


            <MDBContainer fluid className="my-5 uniqueRight">
                <MDBContainer className="">

                    <MDBRow className="align-items-center p-5">

                        <MDBCol lg={4}>
                            <img src={histology} className="img-fluided rounded-6 w-100" />
                        </MDBCol>

                        <MDBCol lg={8}>
                            <h2>
                                Modern Histology Equipment: Precision Tissue Analysis
                            </h2>

                            <p>
                                Our company provides modern equipment for histology, the study of tissues and
                                their microscopic structure. We offer a comprehensive range of instruments necessary
                                for histological research, including tissue processors, microtomes, staining systems,
                                and slide scanners. With our advanced technologies and solutions in histology, we aim
                                to support researchers and professionals in achieving precise and insightful analyses of tissue samples.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
        </>
    );



}

export default Responsibilities;