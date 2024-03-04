import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import service1 from '../../assets/service1.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import product1 from '../../assets/labImg/product1.png'
import product2 from '../../assets/labImg/product2.png'
import product3 from '../../assets/labImg/product3.png'
import product4 from '../../assets/labImg/prod2.2.png'
import { Link } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBBtn
} from 'mdb-react-ui-kit';
const products = [
    {
        id: 1,
        name: 'MOLECULAR MOUSE',
        image: product1,
        description: 'Qualitative and fast analysis of DNA targets through real-time PCR',
    },
    {
        id: 2,
        name: 'TEST1 2.0',
        image: product2,
        description: 'New Generation Instrument For The ESR Determination',
    },
    {
        id: 3,
        name: '3S Safe Sampling Systems',
        image: product3,
        description: 'Storage Solution for All Laboratories Producing Between 50 and 1,000 Biological Samples a Day',
    },

    {
        id: 4,
        name: 'ROLLER Family Instruments',
        image: product4,
        description: 'The compact Alifax solution for small laboratories. ',
    }
];



function Product(props) {
    const { name, image, description, id } = props.product;

    return (
        <MDBCol lg={3} md={5} sm={11} className="mx-4 grid__item">
            <div className="card2">
                <img className="card__img" src={image} alt="" />
                <div className="card__content">
                    <h4 className="card__header">{name}</h4>
                    <p className="card__text">{description}</p>
                    <Link to={`/lab${id}`} className="card__btn">See More</Link>
                </div>
            </div>
        </MDBCol>
    );
}




function Product4() {
    return <>
        <MDBContainer>
            <MDBBtn className="my-3" floating size='lg' tag='a'>
                <Link to='/catalogs' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
            </MDBBtn>
            <h1>Laborotory Supplies</h1>
            <MDBRow className="justify-content-center">
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </MDBRow>
        </MDBContainer>
    </>
}


export default Product4;