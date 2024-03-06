import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import service1 from '../../assets/service1.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import product1 from '../../assets/bacteriologyImg/product1.jpg'
import product2 from '../../assets/bacteriologyImg/product2.png'
import product3 from '../../assets/bacteriologyImg/hbl.jpg'
import product4 from '../../assets/bacteriologyImg/prod2.4.png'
import product5 from '../../assets/bacteriologyImg/product3.jpg'
import product6 from '../../assets/bacteriologyImg/product4.jpg'
import { Link } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBBtn
} from 'mdb-react-ui-kit';
const products = [
    {
        id: 1,
        name: 'I-dOne',
        image: product1,
        description: ' I-dOne identifies the bacterial spectra, which can be considered as the molecular fingerprint of microorganisms',
    },
    {
        id: 2,
        name: 'HB&L UROQUATTRO',
        image: product3,
        description: ' The compact instrument, with dedicated reagents, performs rapid bacterial culture',
    },
    {
        id: 3,
        name: 'ALFRED 60/AST',
        image: product4,
        description: 'The fully-automated instrument able to perform, with dedicated reagents, rapid bacterial culture...',
    },
    {
        id: 4,
        name: 'SIDECAR',
        image: product2,
        description: 'Real walk-away system for rapid bacterial culture and plate streaking of liquid samples.',
    },
    {
        id: 5,
        name: 'BIOMIC V3',
        image: product5,
        description: 'BIOMIC V3 provides a digital record of test results and high resolution images. ',
    },
    {
        id: 6,
        name: 'TRINITY V3',
        image: product6,
        description: 'TRINITY V3 is designed and manufactured by Giles Scientific in Santa Barbara, California, USA.',
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
                    <Link to={`/bacter${id}`} className="card__btn">See More</Link>
                </div>
            </div>
        </MDBCol>
    );
}




function Product3() {
    return <>
        <MDBContainer>
            <MDBBtn className="my-3" floating size='lg' tag='a'>
                <Link to='/catalogs' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
            </MDBBtn>
            <h1>Bacteriology</h1>
            <MDBRow className="justify-content-center">
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </MDBRow>
        </MDBContainer>
    </>
}


export default Product3;