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


import Header from "../mainComponents/Header";
import Footer from "../mainComponents/Footer";
import partn1 from '../partnersImg/Partner1.png'
import partn2 from '../partnersImg/Partner2.png'
import partn3 from '../partnersImg/Partner3.png'
import partn4 from '../partnersImg/Partner4.png'
import partn5 from '../partnersImg/Partner5.png'
import partn7 from '../partnersImg/Partner7.png'
import partn8 from '../partnersImg/Partner8.png'
import partn9 from '../partnersImg/Partner9.png'
import partn10 from '../partnersImg/Partner10.png'
import partn11 from '../partnersImg/Partner11.png'
import background from '../assets/background.png' 


function Brands() {


    return (
        <>
            <MDBContainer className="mt-4 background-logo" style={{backgroundImage: `url(${background})` }}  >
                <h1 className="text-center">Our Partners</h1>
                <p>
                    IVM partners with trusted organizations and institutions worldwide.
                    Our partners trust us to deliver innovative solutions and reliable
                    support. Together, we collaborate to achieve common goals, driving
                    progress and making a positive impact in our communities. Our commitment
                    to excellence and integrity ensures that our partnerships thrive, bringing
                    mutual benefit and success to all involved.
                </p>
                <MDBRow className="align-items-center ">
                    <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-50" src={partn1} alt="" /></MDBCol>
                    <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-75" src={partn8} alt="" /></MDBCol>
                    <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-50" src={partn3} alt="" /></MDBCol>
                    <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-25" src={partn4} alt="" /></MDBCol>
                    <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-25" src={partn5} alt="" /></MDBCol>
                    {/* <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-" src={partn7} alt="" /></MDBCol> */}
                    <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-30" src={partn2} alt="" /></MDBCol>
                    <MDBCol className="text-center mt-5 mb-5" lg={4} md={6}><img className="w-25" src={partn11} alt="" /></MDBCol>
                    <MDBCol className="text-center mt-5" lg={4} md={6}><img className="w-30" src={partn9} alt="" /></MDBCol>
                    <MDBCol className="text-center mt-5 mb-5" lg={4} md={6}><img className="w-50" src={partn10} alt="" /></MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );



}

export default Brands;