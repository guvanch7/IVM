import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Modal from "./Modal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from '../company/About';
import App from "../App";
import Home from "../company/Home";
import Mission from '../company/Mission'
import Brands from '../company/Brands'
import Licenses from '../company/Licenses'
import Responsibility from '../company/Responsibility'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';




function Header({ modalName }) {

    const [openBasic, setOpenBasic] = useState(false);

    return (

        <Router>
            <div>
                

                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>LOGO</MDBNavbarBrand>

                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setOpenBasic(!openBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar center open={openBasic}>
                            <MDBNavbarNav className=' mb-2 mb-lg-0 justify-content-center'>
                                <MDBNavbarItem className="me-3">
                                    <MDBNavbarLink active aria-current='page' href='/'>

                                        <Link to='/'>
                                            Home
                                        </Link>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem className="me-3">
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            Company
                                        </MDBDropdownToggle>


                                        <MDBDropdownMenu>
                                            <MDBDropdownItem  link>
                                                <Link to='/about'>
                                                    About Us
                                                </Link>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem href="/mission" link>
                                             <Link to='/mission'>
                                                Our Mission
                                                 </Link>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem  link>
                                             <Link to='/responsibility'>
                                                Social Responsibility
                                                 </Link>
                                            
                                             </MDBDropdownItem>
                                            <MDBDropdownItem  link>
                                                <Link to='/licenses'>
                                                Licenses
                                                 </Link>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem  link>
                                                <Link to='/partners'>
                                                Partners
                                                 </Link>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>

                                <MDBNavbarItem className="me-3">
                                    <MDBNavbarLink >
                                    <Link to='/products'>
                                        Products
                                    </Link>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem className="me-3">
                                    <MDBNavbarLink >
                                    <Link to='/services'>
                                        Services
                                    </Link>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem className="me-3">
                                    <MDBNavbarLink >
                                    <Link to='/contacts'>
                                        Contacts
                                    </Link>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                            </MDBNavbarNav>

                            <Modal modalName={'Quote'} />
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>

                <Routes>
                    <Route path='/about' Component={About}>

                    </Route>
                    <Route path='/mission' Component={Mission}>
                    </Route>
                    <Route path='/' Component={Home}>
                    </Route>
                </Routes>
            </div>
        </Router>


    );



}

export default Header;
