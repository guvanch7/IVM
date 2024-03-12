import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import Header from './mainComponents/Header'
import MyCarousel from './mainComponents/MyCarousel'
import Modal from './mainComponents/Modal';
import About from './company/About';
import Home from './company/Home';
import Mission from './company/Mission'
import Brands from './company/Brands'
import ServicePage from './company/ServicePage';
import ServiceFirst from './company/services/ServiceFirst';
import ServiceSecond from './company/services/ServiceSecond';
import ServiceThird from './company/services/ServiceThird';
import Licenses from './company/Licenses';
import Catalogs from './company/Catalogs';
import Responsibility from './company/Responsibility'
import Contact from './company/Contact'
// import Footer from './mainComponents/Footer';
import './assets/style.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBRow, MDBCol,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
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
  MDBFooter
} from 'mdb-react-ui-kit';

import Logo from './assets/IVM.png'
import Partners from './mainComponents/Partners';
import Prod1 from './company/citology/Prod1';
import Prod2 from './company/citology/Prod2';
import Prod3 from './company/citology/Prod3';
import Prod4 from './company/citology/Prod4';
import Prod5 from './company/citology/Prod5';
import Prod6 from './company/citology/Prod6';
import Prod7 from './company/citology/Prod7';
import Prod8 from './company/citology/Prod8';
import Prod9 from './company/citology/Prod9';
import Prod10 from './company/citology/Prod10';
import Prod11 from './company/citology/Prod11';
import Prod12 from './company/citology/Prod12';
import Prod13 from './company/citology/Prod13';
import Prod14 from './company/citology/Prod14';
import Prod15 from './company/citology/Prod15';
import Prod16 from './company/citology/Prod16';
import Prod17 from './company/citology/Prod17';

import Hist1 from './company/histopothology/Hist1';
import Hist2 from './company/histopothology/Hist2';
import Hist3 from './company/histopothology/Hist3';
import Hist4 from './company/histopothology/Hist4';
import Hist5 from './company/histopothology/Hist5';
import Hist6 from './company/histopothology/Hist6';
import Hist7 from './company/histopothology/Hist7';
import Hist8 from './company/histopothology/Hist8';
import Hist9 from './company/histopothology/Hist9';
import Hist10 from './company/histopothology/Hist10';

import Bacter1 from './company/bacteriology/Bacter1';
import Bacter2 from './company/bacteriology/Bacter2';
import Bacter3 from './company/bacteriology/Bacter3';
import Bacter4 from './company/bacteriology/Bacter4';
import Bacter5 from './company/bacteriology/Bacter5';
import Bacter6 from './company/bacteriology/Bacter6';

import Lab1 from './company/laborotory/Lab1';
import Lab2 from './company/laborotory/Lab2';
import Lab3 from './company/laborotory/Lab3';
import Lab4 from './company/laborotory/Lab4';


import Product1 from './company/catalogProd/Product1';
import Product2 from './company/catalogProd/Product2';
import Product3 from './company/catalogProd/Product3';
import Product4 from './company/catalogProd/Product4';





function App() {

  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const oTop = document.getElementById('counter').getBoundingClientRect().top - window.innerHeight;
      if (!counted && window.pageYOffset > oTop) {
        const countElements = document.querySelectorAll('.count');
        countElements.forEach((element) => {
          const countTo = parseInt(element.getAttribute('data-count'), 10);
          let start = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / countTo));
          const timer = setInterval(() => {
            start += 1;
            element.innerText = start;
            if (start === countTo) {
              clearInterval(timer);
            }
          }, stepTime);
        });
        setCounted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [counted]);


  const [openBasic, setOpenBasic] = useState(false);




  return (
    <div>


      <Router>
        <div>


          <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
              <MDBNavbarBrand href='#'>
                <Link to={'/'}>
                  <img src={Logo} height={50} />
                </Link>
              </MDBNavbarBrand>

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
                    <MDBDropdown  >
                      <MDBDropdownToggle tag='a' className='nav-link active' role='button'>
                        Company
                      </MDBDropdownToggle>


                      <MDBDropdownMenu>

                        <Link to='/about' >
                          <MDBDropdownItem link>
                            About Us
                          </MDBDropdownItem>
                        </Link>



                        <Link to='/responsibility'>
                          <MDBDropdownItem link>
                            Comprehensive solutions
                          </MDBDropdownItem>
                        </Link>



                        <Link to='/brands'>
                          <MDBDropdownItem link>
                            Partners
                          </MDBDropdownItem>
                        </Link>

                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-3 active">
                    <MDBNavbarLink className='active'>
                      <Link to={'/catalogs'}>
                        Products
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-3">
                    <MDBNavbarLink className='active' >
                      <Link to={'/services'}>
                        Services
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-3">
                    <MDBNavbarLink className='active' >
                      <Link to={'/contact'}>
                        Contact us
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                </MDBNavbarNav>

                <Modal modalName={'Quote'} />
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>

          <Routes>
            <Route path='/about' Component={About}></Route>

            {/* <Route path='/mission' Component={Mission}></Route> */}

            <Route path='/' Component={Home}></Route>

            <Route path='/responsibility' Component={Responsibility}></Route>

            <Route path='/brands' Component={Brands}></Route>

            <Route path='/catalogs' Component={Catalogs}></Route>

            <Route path='/catalog1' Component={Product1}></Route>

            <Route path='/catalog2' Component={Product2}></Route>

            <Route path='/catalog3' Component={Product3}></Route>

            <Route path='/catalog4' Component={Product4}></Route>

            <Route path='/services' Component={ServicePage}></Route>

            <Route path='/service1' Component={ServiceFirst}></Route>

            <Route path='/service2' Component={ServiceSecond}></Route>

            <Route path='/service3' Component={ServiceThird}></Route>

            <Route path='/contact' Component={Contact}></Route>


            <Route path='/prod1' Component={Prod1}></Route>

            <Route path='/prod2' Component={Prod2}></Route>

            <Route path='/prod3' Component={Prod3}></Route>

            <Route path='/prod4' Component={Prod4}></Route>

            <Route path='/prod5' Component={Prod5}></Route>

            <Route path='/prod6' Component={Prod6}></Route>

            <Route path='/prod7' Component={Prod7}></Route>

            <Route path='/prod8' Component={Prod8}></Route>

            <Route path='/prod9' Component={Prod9}></Route>

            <Route path='/prod10' Component={Prod10}></Route>

            <Route path='/prod11' Component={Prod11}></Route>

            <Route path='/prod12' Component={Prod12}></Route>

            <Route path='/prod13' Component={Prod13}></Route>

            <Route path='/prod14' Component={Prod14}></Route>

            <Route path='/prod15' Component={Prod15}></Route>

            <Route path='/prod16' Component={Prod16}></Route>

            <Route path='/prod17' Component={Prod17}></Route>

            <Route path='/hist1' Component={Hist1}></Route>

            <Route path='/hist2' Component={Hist2}></Route>

            <Route path='/hist3' Component={Hist3}></Route>

            <Route path='/hist4' Component={Hist4}></Route>

            <Route path='/hist5' Component={Hist5}></Route>

            <Route path='/hist6' Component={Hist6}></Route>

            <Route path='/hist7' Component={Hist7}></Route>

            <Route path='/hist8' Component={Hist8}></Route>

            <Route path='/hist9' Component={Hist9}></Route>

            <Route path='/hist10' Component={Hist10}></Route>

            <Route path='/bacter1' Component={Bacter1}></Route>

            <Route path='/bacter2' Component={Bacter2}></Route>

            <Route path='/bacter3' Component={Bacter3}></Route>

            <Route path='/bacter4' Component={Bacter4}></Route>

            <Route path='/bacter5' Component={Bacter5}></Route>

            <Route path='/bacter6' Component={Bacter6}></Route>

            <Route path='/lab1' Component={Lab1}></Route>

            <Route path='/lab2' Component={Lab2}></Route>

            <Route path='/lab3' Component={Lab3}></Route>

            <Route path='/lab4' Component={Lab4}></Route>

          </Routes>


          <MDBFooter style={{ backgroundColor: '#EDF7FF' }} className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

            </section>

            <section className=''>
              <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      <Link to={'/'}> <img src={Logo} height={50} /></Link>
                    </h6>
                    <p>
                      Explore our comprehensive solutions to help you do your job.
                    </p>
                  </MDBCol>

                  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link to={'/about'} className='text-reset'>
                        About Us
                      </Link>
                    </p>
                    <p>
                      <Link to={'/catalogs'} className='text-reset'>
                        Catalog
                      </Link>
                    </p>
                    <p>
                      <Link to={'/responsibility'} className='text-reset'>
                        Comprehensive solutions
                      </Link>
                    </p>

                  </MDBCol>

                  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                    <p>
                      <Link to={'/catalogs'} className='text-reset'>
                        Products
                      </Link>
                    </p>
                    <p>
                      <Link to={'/services'} className='text-reset'>
                        Services
                      </Link>
                    </p>
                    <p>
                      <Link to={'/contact'} className='text-reset'>
                        Contact us
                      </Link>
                    </p>
                    <p>
                      <Link to={'/brands'} className='text-reset'>
                        Partners
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
                    <p><MDBIcon color='secondary' fas icon="phone-alt" /> +971 50 8520 524</p>
                    <p>
                      <MDBIcon color='secondary' icon='home' className='me-2' />
                      P.O. Box 390789, Ras Al Khaimah, Dubai, UAE
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
        </div>
      </Router>





    </div>
  )
}




export default App
