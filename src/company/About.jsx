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

import background from '../assets/background.png'

import Header from "../mainComponents/Header";

import Footer from "../mainComponents/Footer";

function About() {


    return (
        <>

            <MDBContainer className="background-logo mt-5" style={{backgroundImage: `url(${background})` }}>
                <h1 className="text-center mb-4">IVM - Empowering Health through Technology</h1>
                <p>
                    <b>IVM Medical Equipment Trading Ltd</b> (IVM)  was founded in 2015 in the UAE.
                    Our business involves a wide range of medical equipment.
                </p>

                <p>
                    Global manufacturers of medical equipment and consumables trust IVM for promotion and sales in CIS and India.
                </p>

                <p>
                    The range of medical products helps fully equip medical institutions of any profile in tight timeframes. That's why IVM is one of the few operators in the market of comprehensive projects.
                </p>

                <p>

                    The company's clients include state healthcare institutions and laboratories, commercial clinics, research institutes, sanatoriums, veterinary clinics, livestock complexes, and the food industry.
                </p>

                <p>
                    IVM offers medical audit medical consulting and a comprehensive range of medical device services throughout their entire lifecycle. We provide warranty and post-warranty repairs, pre-sales preparation, and equipment installation.
                </p>


            </MDBContainer>

        </>
    );



}

export default About;