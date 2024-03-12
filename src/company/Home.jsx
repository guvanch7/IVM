import React from "react";
import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import equipment from '../assets/equipment.jpg'
import Products from '../mainComponents/Products';
import Partners from '../mainComponents/Partners';



import Services from '../mainComponents/Services';

import Modal from "../mainComponents/Modal";

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer, MDBRow, MDBCol, MDBIcon, MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn

} from 'mdb-react-ui-kit';

import Header from "../mainComponents/Header";

import MyCarousel from "../mainComponents/MyCarousel";

import Footer from "../mainComponents/Footer";

function Home() {


    return (
        <>
            <MyCarousel />

            <MDBContainer className='mt-5'>

                <h2 className='text-center'>
                    "IVM" offers comprehensive medical solutions with Artificial Intelligence (AI)
                </h2>


                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md='6' lg='6'>
                        <img src={equipment} className='w-100 img-fluided rounded-6 mb-5 animate__animated animate__fadeInLeft ' alt="" />
                    </MDBCol>
                    <MDBCol md='12' lg='5' >
                        <p className="animate__animated animate__fadeInDown   animate__faster"> <MDBIcon fas icon="check-circle" />  Cervical cancer screening with AI</p>
                        <p className="animate__animated animate__fadeInDown animate__delay-1s animate__faster"> <MDBIcon fas icon="check-circle" />  Cytology & Histopathology with AI</p>
                        <p className="animate__animated animate__fadeInDown animate__delay-2s animate__faster"> <MDBIcon fas icon="check-circle" />  Microbiology </p>
                        <p className="animate__animated animate__fadeInDown animate__delay-3s animate__faster"> <MDBIcon fas icon="check-circle" />  Molecular diagnostics</p>
                        <p className="animate__animated animate__fadeInDown animate__delay-4s animate__faster"> <MDBIcon fas icon="check-circle" />  Lab automation  </p>
                        <p className="animate__animated animate__fadeInDown animate__delay-5s animate__faster"> <MDBIcon fas icon="check-circle" />  Equipping hospitals with necessary medical equipment </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mt-4 uniqueBg  p-3'>

                <MDBContainer className='mt-4  p-1'>
                    <MDBRow className='align-items-center'>
                        <MDBCol className='text-left' lg={4}>
                            <div className='mark-header d-none d-lg-block text-left'>
                                <h1 >About Us</h1>
                                <hr className="linee" />
                            </div>

                            <div className="d-lg-none">
                                <h1 >About Company</h1>
                                <hr className="linee" />
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <p className="mt-sm-2">
                                <b>
                                    IVM Medical Equipment Trading Ltd
                                </b> – Since 2015, based out of the United Arab Emirates, we operate in the CIS
                                countries and expanding in India and SAARC countries. We specialize in providing
                                modern comprehensive medical solutions for medical centers, Clinical laboratories
                                & Research Centers with first-class service support. We have earned a reputation
                                as a reliable partner, supplier and innovator in the healthcare sector.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>

            <Services />

            <MDBContainer fluid className='' >
                <MDBContainer className='mt-2 ' >

                    <MDBRow id='counter' className=' justify-content-evenly align-items-center'>

                        <MDBCol className="border-count rounded-6 mt-3" sm={12} lg={3}>
                            <li>
                                <span className="count percent" data-count="2015">
                                    <h1>0</h1>
                                </span>
                                <h6>year founded</h6>
                            </li>
                        </MDBCol>

                        <MDBCol className="border-count rounded-6 mt-3" sm={12} lg={3}>
                            <li>
                                <span className="count percent" data-count="29">
                                    <h1>0</h1>
                                </span>
                                <h6>partners around the world</h6>
                            </li>
                        </MDBCol>

                        <MDBCol className="border-count rounded-6 mt-3" sm={12} lg={3}>
                            <li>
                                <span className="count percent" data-count="375">
                                    <h1>0</h1>
                                </span>
                                <h6>satisfied customers</h6>
                            </li>
                        </MDBCol>



                    </MDBRow>

                </MDBContainer>
            </MDBContainer>

            <Products />

            <div className='hero-dioganal mt-4'>
                <MDBContainer className=' p-5 content'>
                    <h1 className='text-center'>Get a free expert consultation.</h1>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg={8} sm={12}>
                            <p>
                                Our team of experts is ready to assist you with any inquiries regarding medical equipment,
                                its applications, and pricing. We'll tailor solutions to your needs and provide personalized
                                commercial offers.
                            </p>
                        </MDBCol>
                        <MDBCol lg={4} sm={12}>
                            <Modal modalName={'Start Cooperation'} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>


            <Partners />
        </>



    );



}

export default Home;
