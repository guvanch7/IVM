import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import prodImg from '../prodImg/prod.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBBtn
} from 'mdb-react-ui-kit';
import service2 from '../../assets/service2.jpg'






function ServiceSecond() {
    return (

        <MDBContainer>

            <MDBBtn className="mt-5" floating size='lg' tag='a'>
                <Link to='/services' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
            </MDBBtn>

            <h2 className="mt-3 mb-4">Ready Ideas for Healthcare.</h2>
            <MDBRow>
                <MDBCol className="text-center" lg={12}>
                    <img src={service2} className="w-75" alt="" />
                </MDBCol>

                <MDBCol lg={12} className="mt-5">
                    <h3>It works as intended.</h3>
                    <hr className="linee" />

                    <p>
                        IVM - offers comprehensive medical integration solutions. This means that we not only supply equipment, but also design healthcare facilities, equip them on a turnkey basis, and provide service support.
                    </p>

                    <p>
                        We have extensive experience in comprehensive equipment provision.
                    </p>

                    <ul>
                        <li>Mobile and stationary medical points at enterprises, remote sites, and federal highways</li>
                        <li>Primary health care centers and general practitioner offices</li>
                        <li>Medical centers and hospitals</li>
                        <li>Multiprofile hospitals and their departments</li>
                        <li>Clinico-diagnostic laboratories with a centralized research system at the regional level</li>
                        <li>Central sterilization stations</li>
                        <li>Perinatal centers</li>
                        <li>Blood banks</li>
                        <li>Stem cell banks</li>
                    </ul>

                     <p>IVM, in cooperation with partners, offers complete turnkey production and construction solutions.</p>


                  

                </MDBCol>





            </MDBRow>

        </MDBContainer>
    )
}


export default ServiceSecond;