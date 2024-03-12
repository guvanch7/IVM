import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from '../assets/bacteriologyImg/prod1.5.jpg'
import product2 from '../assets/bacteriologyImg/product3.jpg'
import product3 from '../histopothologyImg/product2.png'
import product4 from '../assets/bacteriologyImg/hbl.jpg'
import product5 from '../citologyImg/product1.png'
import product6 from '../histopothologyImg/prod7.1.png'
import product7 from '../citologyImg/product12.png'
import product8 from '../histopothologyImg/cryostat.png'
import product9 from '../histopothologyImg/product4.png'
import product10 from '../histopothologyImg/product5.png'




import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon,
} from 'mdb-react-ui-kit';






function Products() {
    return (
        <MDBContainer className="mt-5">
            <h1 className="text-center">
                Offering medical equipment and supplies.
            </h1>
            <p>
                Representing 29 global manufacturers of medical equipment and consumables, IVM is entrusted with promoting and selling their Branded products in CIS countries and India and other SAARC countries.
            </p>



            <MDBRow className=" align-items-center justify-content-center">

                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product1} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">I-dOne</h4>
                            <Link to={`/bacter1`} className="card__btn2 addEff2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>


                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product2} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">Biomic V3</h4>
                            <Link to={`/bacter5`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>



                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product4} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">HB&L</h4>
                            <Link to={`/bacter2`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product5} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">CELL EXPERT</h4>
                            <Link to={`/prod1`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product6} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">DP360 Stainer & Coverslipper</h4>
                            <Link to={`/hist7`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>


                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product7} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">LTS-3000B</h4>
                            <Link to={`/prod12`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>


                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product8} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">6250 Cryostat Microtome</h4>
                            <Link to={`/hist6`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>


                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product9} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">HP300 Plus Tissue Processor</h4>
                            <Link to={`/hist4`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>


                <MDBCol lg={3} md={5} sm={11} className="mx-4 ">
                    <div className="card2">
                        <img className="card__img2" src={product10} alt="" />
                        <div className="card__content">
                            <h4 className="card__header text-center">MT1 Rotary Microtome</h4>
                            <Link to={`/hist5`} className="card__btn2">Read More</Link>
                        </div>
                    </div>
                </MDBCol>


            </MDBRow>


        </MDBContainer>
    )
}


export default Products;
