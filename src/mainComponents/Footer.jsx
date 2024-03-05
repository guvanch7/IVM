import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "../company/About";
import Home from "../company/Home";
import {
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBCol,
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

import Logo from '../assets/IVM.png'

function Footer({ }) {
  return (
    <Router>


      <MDBFooter style={{ backgroundColor: '#EDF7FF' }} className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <img src={Logo} height={50} />
                </h6>
                <p>
                  Explore our comprehensive solutions to help you do your job.
                </p>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <Link to={'/about'} className='text-reset'>
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to='/mission' className='text-reset'>
                    Our Mission
                  </Link>
                </p>
                <p>
                  <Link to='/responsibility' className='text-reset'>
                    Social Responsibility
                  </Link>
                </p>
                <p>
                  <Link to='#!' className='text-reset'>
                    Licenses
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <Link to='#!' className='text-reset'>
                    Products
                  </Link>
                </p>
                <p>
                  <Link to='/services' className='text-reset'>
                    Services
                  </Link>
                </p>
                <p>
                  <Link to='/contacts' className='text-reset'>
                    Contacts
                  </Link>
                </p>
                <p>
                  <Link to='/brands' className='text-reset'>
                    Partners
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                    P.O. Box 390789, Ras Al Khaimah, Dubai,UAE
                </p>
                <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  info@ivmmedical.com
                </p>
              </MDBCol>

            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: '#DCE6F7' }}>
          <p>
            © 2024 Copyright: <b>
              IVM Medical Equipment Trading Ltd
            </b>
          </p>
          <a className='text-reset fw-bold' href=' '>

          </a>
        </div>
      </MDBFooter>



      <Routes>
        <Route path='/about' Component={About}></Route>
        
        <Route path='/' Component={Home}></Route>
      </Routes>
    </Router>
  )

}

export default Footer;