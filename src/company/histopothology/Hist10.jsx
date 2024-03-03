import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product10.png";



import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist10() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>Disposable Blades</h1>
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="text-center mt-4" lg={12}>
                    <img src={product1} className="w-50" alt="" />
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>
                <p className="mt-1  fw-bold">Low & high profile disposable microtome blade. Suitable for various types of microtomes in pathology labs or research labs. Treated with plasma technology and made of stainless steel, the blades have a hardness up to 1100 HV and are sharp and durable.</p>

                <p>Low & high profile disposable microtome blade. Suitable for various types of microtomes in pathology labs or research labs. Treated with plasma technology and made of stainless steel, the blades have a hardness up to 1100 HV and are sharp and durable.</p>

            </MDBRow>

        </MDBContainer>
    )
}


export default Hist10;