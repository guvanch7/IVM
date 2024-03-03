import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
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

import Header from "../mainComponents/Header";

import Footer from "../mainComponents/Footer";
import Partners from "../mainComponents/Partners";

function License() {


    return (
        <>
            <Header />
            <MDBContainer>
                <h1>IVM - Empowering Health through Technology</h1>
                <p>
                    IVM is a manufacturing and distribution conglomerate, supplying treatment and diagnostic technologies,
                    comprehensive technical solutions, and services for their support and implementation. Our product
                    range covers 90% of market needs. Additionally, we offer service assistance and manufacture medical
                    products under our own brands, adhering to global standards.
                </p>

                <p>
                    The company's headquarters are located in Yekaterinburg and Moscow, with branches operating in every region of Russia and
                    in CIS countries. Together with our partners, we have a distribution network for medical products, comprising 73 sales offices
                    for equipment and services, as well as technical centers.
                </p>

                <p>

                    367 global and Russian manufacturers of medical equipment and consumables trust IVM for promotion
                    and sales in Russia and the CIS. Among our products are unique innovative technologies: minimally
                    invasive systems for fighting oncological diseases, liver elastometry technology, capsule endoscopy,
                    efferent treatment methods, and our own developments for the blood service, created in collaboration
                    with transfusiologists.
                </p>

                <p>

                    The range of medical products helps fully equip medical institutions of any profile in tight timeframes.
                    That's why IVM is one of the few operators in the market of comprehensive projects.
                </p>

                <p>

                    The company has extensive experience in the development and production of modern high-tech equipment
                    and consumables. In Yekaterinburg, the company manufactures medical equipment under the "Lidkor" brand,
                    in Chistopol it produces disposable medical clothing, and in Krasnodar, it manufactures infusion solutions
                    under the "Steritek" brand. The division in Kazan offers comprehensive disinfection solutions under the "Delrus-Dez" brand.
                </p>

                <p>
                    The company's clients include state healthcare institutions and laboratories, commercial clinics, research institutes, sanatoriums,
                    veterinary clinics, livestock complexes, and the food industry.
                </p>

                <p>
                    IVM offers a comprehensive range of medical device services throughout their entire lifecycle. We provide warranty and post-warranty
                    repairs, pre-sales preparation, and equipment installation. Our service centers are located in major cities across Russia and Kazakhstan.
                    The quality management system of the company's Technical Center is certified to comply with the requirements of the international
                    standard ISO 9001:2015. In 2016, Quality Austria, a renowned European quality auditor, confirmed this status for the third time.
                </p>

                <p>
                    The company encourages scientific research, the development of new treatment and diagnostic methods, and sponsors scientific publications.
                    Additionally, we partner with major medical scientific congresses and forums.
                </p>

                <p>
                    The equipment and consumables that our company represents in the Russian market comply with the strictest environmental standards
                    and are safe for both nature and humans.
                </p>
            </MDBContainer>
            <Footer />
        </>
    );



}

export default License;