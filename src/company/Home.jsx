import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import equipment from '../assets/equipment.png'
import Products from '../mainComponents/Products';
import Partners from '../mainComponents/Partners';


import Services from '../mainComponents/Services';

import Modal from "../mainComponents/Modal";

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn,
 
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
                    <span className='brandName'> "IVM" </span>  offers comprehensive healthcare solutions medical equipment and consumables.
                </h2>


                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md='6' lg='5'>
                        <img src={equipment} className='w-100' alt="" />
                    </MDBCol>
                    <MDBCol md='12' lg='7' >
                        <p> <MDBIcon fas icon="check-circle" />   We specialize in providing professional audit and consulting services in healthcare organization</p>
                        <p> <MDBIcon fas icon="check-circle" /> Enhancing hospitals with essential medical equipment and consumables.</p>
                        <p> <MDBIcon fas icon="check-circle" />  Comprehensive medical equipment servicing throughout its life cycle.</p>
                        <Modal modalName={'Start Cooperation'} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer fluid className='mt- uniqueBg  p-3'>

                <MDBContainer className='mt-4  p-1'>
                    <MDBRow className='align-items-center'>
                        <MDBCol className='text-left' lg={4}>
                            <div className='mark-header text-left'>
                                <h1 >About Company</h1>
                                <hr className="linee" />
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <p>
                                <b>
                                    IVM Medical Equipment Trading Ltd
                                </b> - operating in the CIS and India markets. We specialize in supplying advanced medical 
                                    equipment and we also provide first-class service support. Over the 9 years of our work,
                                    we have maintained our reputation as a reliable partner,
                                    supplier and innovator in the healthcare sector.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>

            <Services />

            <MDBContainer fluid className='' >
                <MDBContainer className='mt-5 ' >

                    <MDBRow id='counter' className=' justify-content-evenly align-items-center'>

                        <MDBCol className="border-count rounded-6" sm={12} lg={3}>
                            <li>
                                <span className="count percent" data-count="2015">
                                <h1>0</h1>
                                </span>
                                <h6>years in the medical industry</h6>
                            </li>
                        </MDBCol>

                        <MDBCol className="border-count rounded-6" sm={12} lg={3}>
                            <li>
                                <span className="count percent" data-count="29">
                                    <h1>0</h1>
                                </span>
                                <h6>partners around the world</h6>
                            </li>
                        </MDBCol>

                        <MDBCol className="border-count rounded-6" sm={12} lg={3}>
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
                    <h1 className='text-center'>Receive expert advice for free.</h1>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg={8} sm={12}>
                            <p>
                                Our team of experts is ready to assist you with any inquiries regarding medical equipment,
                                its applications, and pricing. We'll tailor solutions to your needs and provide personalized commercial offers.
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
