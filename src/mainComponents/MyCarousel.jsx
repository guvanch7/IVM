import React from 'react';
import Carousel from '../assets/carousel-1.jpg'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

function MyCarousel() {
  return (
    <MDBCarousel showControls fade>
      
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100 ' alt='...' />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src=' https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
      </MDBCarouselItem>
      
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
      </MDBCarouselItem>

    </MDBCarousel>
  );
}

export default MyCarousel