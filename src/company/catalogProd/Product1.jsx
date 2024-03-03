import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import service1 from '../../assets/service1.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import product1 from '../../citologyImg/product1.png'
import product2 from '../../citologyImg/product18.png'
import product3 from '../../citologyImg/product3.png'
import product4 from '../../citologyImg/product4.png'
import product5 from '../../citologyImg/product5.png'
import product6 from '../../citologyImg/product6.png'
import product7 from '../../citologyImg/product7.png'
import product8 from '../../citologyImg/product8.png'
import product9 from '../../citologyImg/product9.png'
import product10 from '../../citologyImg/product10.png'
import product11 from '../../citologyImg/product11.png'
import product12 from '../../citologyImg/product12.png'
import product13 from '../../citologyImg/product13.png'
import product14 from '../../citologyImg/product14.png'
import product15 from '../../citologyImg/product15.png'
import product16 from '../../citologyImg/product16.png'
import product17 from '../../citologyImg/product17.png'
import { Link } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
const products = [
    {
        id: 1,
        name: 'Cell Expert',
        image: product1,
        description: 'Cell Expert is a high speed instrument with automatic opening and closing of specimen vials.',
    },
    {
        id: 2,
        name: 'Liquid-Based Cytological Reagent',
        image: product2,
        description: 'For more detailed information, please follow the link',
    },
    {
        id: 3,
        name: 'IDC-20',
        image: product3,
        description: 'Automated System for Cytology Laboratories Handling Up to 50,000 Tests per Year',
    },

    {
        id: 4,
        name: 'Paint Cell',
        image: product4,
        description: 'Automate Your Special Staining',
    },


    {
        id: 5,
        name: 'IDC Shaker',
        image: product5,
        description: 'IDC Shaker: The Solution for Shaking Sample Bottles',
    },


    {
        id: 6,
        name: 'LTS-V800',
        image: product6,
        description: 'Vaginal Secretion Analyzer',
    },


    {
        id: 7,
        name: 'LTS-V400',
        image: product7,
        description: 'Vaginitis Detection System',
    },


    {
        id: 8,
        name: 'LTS-E100-FECES',
        image: product8,
        description: 'Vaginitis Analysis & Processing System',
    },

    {
        id: 9,
        name: 'LTS-YJ1000',
        image: product9,
        description: 'Cytocentrifuge',
    },

    {
        id: 10,
        name: 'LT-YJ2000',
        image: product10,
        description: 'Liquid-Based Cytology Smear Processor',
    },


    {
        id: 11,
        name: 'LTS-3000A',
        image: product11,
        description: 'Liquid Based Cytology Slide Processor',
    },


    {
        id: 12,
        name: 'LTS-3000B',
        image: product12,
        description: 'Liquid Based Cytology Slide Processor',
    },


    {
        id: 13,
        name: 'LTS-T1000',
        image: product13,
        description: 'Specific Protein Analyzer',
    },


    {
        id: 14,
        name: 'LTS-T2000',
        image: product14,
        description: 'Specific Protein Analysis System',
    },


    {
        id: 15,
        name: 'LTS-IF80',
        image: product15,
        description: 'Immunofluorescence Quantitive Analyzer',
    },


    {
        id: 16,
        name: 'Microbial ID &AST Analysis System',
        image: product16,
        description: ' ',
    },


    {
        id: 17,
        name: 'Fecal Occult Blood Test K IT',
        image: product17,
        description: '(COLLODIAL GOLD) HB/TF 2 IN 1',
    },
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
                    <Link to={`/prod${id}`} className="card__btn">See More</Link>
                </div>
            </div>
        </MDBCol>
    );
}

function Pagination({ productsPerPage, totalProducts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function ProductPage({ products, currentPage, productsPerPage }) {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <MDBContainer>
                <MDBRow className="justify-content-center">
                    {currentProducts.map(product => {
                        return <Product key={product.id} product={product} />;
                    })}
                </MDBRow>
            </MDBContainer>
        </>
    );
}

function Product1() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <MDBContainer>
                <MDBBtn className="my-3" floating size='lg' tag='a'>
                    <Link to='/catalogs' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
                </MDBBtn>
                <h1>Cytology</h1>
                <ProductPage
                    products={products}
                    currentPage={currentPage}
                    productsPerPage={productsPerPage}
                />
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                />
            </MDBContainer>
        </>
    );
}


export default Product1;