import React from 'react';
import Carousel from '../assets/carousel-1.jpg'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import { Link } from 'react-router-dom';


function MyCarousel() {
  return (
    <MDBCarousel showControls fade>

      <MDBCarouselItem itemId={1}>
        <Link to={'/catalog3'}>
          <img src={carousel1} className='d-block w-100 ' alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <div className='col-5 text-white carousel-block1'>
              <h1 className='display-3 text-white fw-bolder mt-2 carousel-txt'>Comprehensive solution for bacteriology</h1>
              {/* <p className='text-white'>Explore our diverse range of high-quality bacteriology equipment by clicking the link below.</p> */}

              {/* <Link to={'/catalog3'} className='btn btn-light' >See More</Link> */}
            </div>
          </div>
        </Link>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <Link to={'/catalog1'}>
          <img src={carousel2} className='d-block w-100' alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <div className='col-5 carousel-block2'>
              <h1 className='display-3 fw-bolder carousel-txt'>Cytology With AI Technologies</h1>
              {/* <p>Delve into our exclusive range of cytology tools and instruments by accessing the link provided.</p> */}
              {/* <Link to={'/catalog1'}  className='btn btn-dark'>See More</Link> */}

            </div>

          </div>
        </Link>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <Link to={'/catalog2'}>
          <img src={carousel3} className='d-block w-100' alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <div className='col-5 carousel-block3'>
              <h1 className='display-5 fw-bolder  carousel-txt'>Histopothology & Laborotory Supplies With AI Technologies</h1>
              {/* <p>Explore our extensive range of histopathology and lab supplies.</p> */}
              {/* <Link to={'/catalog2'} className='btn btn-dark'>See More</Link> */}


            </div>
          </div>
        </Link>
      </MDBCarouselItem>

    </MDBCarousel>
  );
}

export default MyCarousel
