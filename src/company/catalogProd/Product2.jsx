import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import service1 from '../../assets/service1.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import product1 from '../../histopothologyImg/product1.png'
import product2 from '../../histopothologyImg/product2.png'
import product3 from '../../histopothologyImg/product3.png'
import product4 from '../../histopothologyImg/product4.png'
import product5 from '../../histopothologyImg/product5.png'
import product6 from '../../histopothologyImg/product6.png'
import product7 from '../../histopothologyImg/product7.png'
import product8 from '../../histopothologyImg/product8.png'
import product9 from '../../histopothologyImg/product9.png'
import product10 from '../../histopothologyImg/product10.png'
import { Link } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBBtn
} from 'mdb-react-ui-kit';
const products = [
    {
        id: 1,
        name: 'C100 Cassette Printer',
        image: product1,
        description: 'Dakewe SurePrint printers are one of the few printers using innovative non-contact cold ...',
    },
    {
        id: 2,
        name: 'S200 Slide Printer',
        image: product2,
        description: '  Featuring non-contact UV laser marking technology',
    },
    {
        id: 3,
        name: 'HP300 Tissue Processor',
        image: product3,
        description: 'Dakewe’s HP300 tissue processor provides reliable processing results and stable operation',
    },

    {
        id: 4,
        name: 'HP300 Plus Tissue Processor',
        image: product4,
        description: 'Designed with safety and innovation in mind,',
    },


    {
        id: 5,
        name: 'MT1 Semi-automated rotary microtome',
        image: product5,
        description: 'Dakewe MT1 semi-automated rotary microtome offers quality sections...',
    },


    {
        id: 6,
        name: '6250 Cryostat Microtome',
        image: product6,
        description: 'Dakewe 6250 Cryostat Microtome features high refrigeration capacity...',
    },


    {
        id: 7,
        name: 'DP360 & CS500 stainer & coverslipper workstation',
        image: product7,
        description: 'High throughput, fully automated staining and coverslipping process.',
    },


    {
        id: 8,
        name: 'Embedding cassettes',
        image: product8,
        description: 'Dakewe’s HistoFlo™ cassettes are engineered to optimize print quality when used with C100 series cassette printers from Dakewe',
    },

    {
        id: 9,
        name: 'Microscope Slides',
        image: product9,
        description: 'Ideal for laser slide printers and coverslipping machines',
    },

    {
        id: 10,
        name: 'Disposable Blades',
        image: product10,
        description: 'Low & high profile disposable microtome blade',
    }
    // Добавьте данные для других продуктов
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
                    <Link to={`/hist${id}`} className="card__btn">See More</Link>
                </div>
            </div>
        </MDBCol>
    );
}




function Product2() {
    return <>
        <MDBContainer>
            <MDBBtn className="my-3" floating size='lg' tag='a'>
                <Link to='/catalogs' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
            </MDBBtn>
            <h1>Histopothology</h1>
            <MDBRow className="justify-content-center">
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </MDBRow>
        </MDBContainer>
    </>
}


export default Product2;