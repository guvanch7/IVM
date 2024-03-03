import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import prodImg from '../prodImg/prod.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import service3 from '../../assets/service3.jpg'






function ServiceThird() {
    return (
        <MDBContainer>

            <MDBBtn className="mt-5" floating size='lg' tag='a'>
                <Link to='/services' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
            </MDBBtn>

            <h2 className="mt-3 mb-4">Healthcare auditing and consulting</h2>
            <MDBRow>
                <MDBCol className="text-center" lg={12}>
                    <img src={service3} className="w-75" alt="" />
                </MDBCol>

                <MDBCol lg={12} className="mt-5">


                    <p>
                        We comprehensively address challenges based on our extensive experience:
                        we have likely encountered a similar issue before and are ready to advise
                        our partners on ways to resolve it. IVM offers comprehensive solutions
                        related to clinic equipment auditing and patient routing. Our wide range
                        of experts in various healthcare fields enables us to provide consultancy
                        and auditing services at the highest level.
                    </p>

                     

                    <ul>
                        <li>Guaranteeing the economic efficiency and functionality of the equipment sold.</li>
                        <li>We implement modern technologies into hospital practices.</li>
                        <li>Tailoring solutions to fit any budget constraints ensures optimal outcomes.</li>
                        <li>We comprehensively solve tasks based on our years of experience: we have undoubtedly encountered similar issues somewhere.</li>
                        <li>Ensuring all necessary procurement procedures are followed, freeing the client from routine tasks as our business processes are fully streamlined.</li>
                        <li>We ensure uninterrupted supply of equipment and consumables to any medical institution.</li>
                        <li>Training personnel in equipment operation with the involvement of leading specialists.</li>
                        <li>Creating and implementing patient routing projects.</li>
                         
                    </ul>
                </MDBCol>





            </MDBRow>

        </MDBContainer>
    )
}


export default ServiceThird;