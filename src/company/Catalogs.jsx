import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import catalog1_1 from '../assets/catalogsImg/catalog1.1.jpg'
import catalog1_2 from '../assets/catalogsImg/catalog1.2.jpg'
import catalog1_3 from '../assets/catalogsImg/catalog1.3.jpeg'
import catalog1 from '../assets/catalogsImg/catalog1.jpg'
import catalog2 from '../assets/catalogsImg/catalog2.jpg'
import catalog3 from '../assets/catalogsImg/catalog3.jpg'
import catalog4 from '../assets/catalogsImg/catalog4.jpg'
import catalog5 from '../assets/catalogsImg/catalog5.jpg'
import catalog6 from '../assets/catalogsImg/catalog6.png'
import catalog7 from '../assets/catalogsImg/catalog7.jpg'
import catalog8 from '../assets/catalogsImg/catalog8.jpg'
import catalog9 from '../assets/catalogsImg/catalog9.jpg'
import catalog10 from '../assets/catalogsImg/catalog10.jpg'
import catalog11 from '../assets/catalogsImg/catalog11.jpeg'
import catalog12 from '../assets/catalogsImg/catalog12.jpg'
import catalog13 from '../assets/catalogsImg/catalog13.jpg'
import catalog14 from '../assets/catalogsImg/catalog14.jpg'
import catalog15 from '../assets/catalogsImg/catalog15.jpg'
import catalog16 from '../assets/catalogsImg/catalog16.jpg'
import catalog17 from '../assets/catalogsImg/catalog17.jpg'
import catalog18 from '../assets/catalogsImg/catalog18.jpg'
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



const catalogs = [
    {
        id: 1,
        name: 'Cytology.',
        image: catalog1_1,
        description: 'Cell Expert is a high speed instrument with automatic opening and closing of specimen vials.',
    },

    {
        id: 2,
        name: 'Histopathology.',
        image: catalog1_2,
        description: 'Cell Expert is a high speed instrument with automatic opening and closing of specimen vials.',
    },

    {
        id: 3,
        name: 'Bacteriology.',
        image: catalog1_3,
        description: 'Cell Expert is a high speed instrument with automatic opening and closing of specimen vials.',
    },

    {
        id: 4,
        name: 'Laboratory Supplies',
        image: catalog13,
        description: 'Cell Expert is a high speed instrument with automatic opening and closing of specimen vials.',
    },
    {
        id: 5,
        name: 'Anesthesiology and Intensive Care Medicine.',
        image: catalog2,
        description: '  Dakewe HP300 Plus tissue processor is engineered to enable a smooth and effective workflow for your laboratory.',
    },
    {
        id: 6,
        name: 'Gastroenterology. Diagnostics. Rehabilitation',
        image: catalog3,
        description: 'Description for Product 3',
    },

    {
        id: 7,
        name: 'Cellular Technologies',
        image: catalog4,
        description: 'Description for Product 3',
    },


    {
        id: 8,
        name: 'Radiodiagnostics',
        image: catalog5,
        description: 'Description for Product 3',
    },


    {
        id: 9,
        name: 'Medical Furniture',
        image: catalog6,
        description: 'Description for Product 3',
    },


    {
        id: 10,
        name: 'Ophthalmology-Otorhinolaryngology',
        image: catalog7,
        description: 'Description for Product 3',
    },


    {
        id: 11,
        name: 'Consumables for Anesthesiology and Intensive Care Medicine',
        image: catalog8,
        description: 'Description for Product 3',
    },

    {
        id: 12,
        name: 'General Hospital Consumables',
        image: catalog9,
        description: 'Description for Product 3',
    },

    {
        id: 13,
        name: 'Blood Service and Transfusiology',
        image: catalog10,
        description: 'Description for Product 3',
    },


    {
        id: 14,
        name: 'Sterilization, Disinfection, and Utilization',
        image: catalog11,
        description: 'Description for Product 3',
    },

    {
        id: 15,
        name: 'Blood Conservation Technologies',
        image: catalog12,
        description: 'Description for Product 3',
    },


    {
        id: 16,
        name: 'Obstetrics, gynecology, and neonatology. ',
        image: catalog1,
        description: 'Description for Product 3',
    },


    {
        id: 17,
        name: 'Traumatology and Orthopedics',
        image: catalog14,
        description: 'Description for Product 3',
    },


    {
        id: 18,
        name: 'Urology and Proctology',
        image: catalog15,
        description: 'Description for Product 3',
    },


    {
        id: 19,
        name: 'Surgery',
        image: catalog16,
        description: 'Description for Product 3',
    },

    {
        id: 20,
        name: 'Endoscopy',
        image: catalog17,
        description: 'Description for Product 3',
    },


    {
        id: 21,
        name: 'Afferent Methods',
        image: catalog18,
        description: 'Description for Product 3',
    },
    // Добавьте данные для других продуктов
];

function Catalog(props) {
    const { name, image, description, id } = props.catalog;

    const handleClick = () => {
        if (id <= 4) {
            // Переход на страницу для первых четырех элементов
            return `/catalog${id}`;
        } else {
            // Открытие модального окна для остальных элементов
            props.onClick();
            return null;
        }
    };

    return (
        <MDBCol lg={4} md={4} sm={12} className="my-4 rounded-9">
            <div className="card text-white card-has-bg  rounded-9 click-col " data-lightbox="gallery" style={{ backgroundImage: `url(${image})` }}>
                {id <= 4 ? (
                    <Link to={handleClick()} style={{ display: 'block' }}>
                        <div>
                            <img className="card-img rounded-9 gynec d-none" src={image} loading="lazy " alt={name} />
                            <div className="card-img-overlay d-flex flex-column ">
                                <div className="card-body ">
                                    <h4 className="card-title mt-0 "><a className="text-white " href="# ">{name}</a></h4>
                                </div>
                                <div className="card-footer ">
                                    <div className="media ">
                                        <img className="mr-3 rounded-circle " src=" " loading="lazy " alt="" />
                                        <div className="media-body ">
                                            <h6 className="my-0 text-white d-block "></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <div onClick={handleClick}>
                        <div>
                            <img className="card-img rounded-9 gynec d-none" src={image} loading="lazy " alt={name} />
                            <div className="card-img-overlay d-flex flex-column ">
                                <div className="card-body ">
                                    <h4 className="card-title mt-0 "><a className="text-white " href="# ">{name}</a></h4>
                                </div>
                                <div className="card-footer ">
                                    <div className="media ">
                                        <img className="mr-3 rounded-circle " src=" " loading="lazy " alt="" />
                                        <div className="media-body ">
                                            <h6 className="my-0 text-white d-block "></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MDBCol>
    );
}

function Catalogs() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCatalogClick = () => {
        toggleModal();
    };

    return (
        <>
            <MDBContainer className="mt-4 ">
                <MDBBtn className="my-3" floating size='lg' tag='a'>
                    <Link to='/' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
                </MDBBtn>
                <h1>Medical equipment and consumables.</h1>
                <hr className="linee" />
                <p>IVM offers equipment and materials to almost all customer groups in the healthcare system. IVM has a wide range of products that can fully equip medical institutions of almost any profile</p>
                <MDBRow className="d-flex">
                    {catalogs.map((catalog, index) => (
                        <Catalog key={index} catalog={catalog} onClick={handleCatalogClick} />
                    ))}
                </MDBRow>
                {showModal && (
                    <div className="modal" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">More Products</h5>
                                    <button type="button" className="btn-close" onClick={toggleModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Information about other products is available upon request.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </MDBContainer>
        </>
    );
}
export default Catalogs;
