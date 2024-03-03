import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";

import partn1 from '../partnersImg/Partner1.png'
import partn2 from '../partnersImg/Partner2.png'
import partn3 from '../partnersImg/Partner3.png'
import partn4 from '../partnersImg/Partner4.png'
import partn5 from '../partnersImg/Partner5.png'
import partn7 from '../partnersImg/Partner7.png'
import partn8 from '../partnersImg/Partner8.png'
import partn9 from '../partnersImg/Partner9.png'
import partn10 from '../partnersImg/Partner10.png'
import partn11 from '../partnersImg/Partner11.png'

function Partners() {

    



    function CustomCarousel() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
          
            autoplaySpeed: 3000,
            autoplay: true,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <Slider {...settings}>
                <div className="slick-slide">
                <img src={partn1} alt="" />
                </div>

                <div className="slick-slide">
                <img src={partn2} alt="" />
                </div>

                <div>
                <img src={partn3} alt="" />
                </div>

                <div>
                <img src={partn4} alt="" />
                </div>

                <div>
                <img src={partn5} alt="" />
                </div>

                
                <div>
                <img src={partn7} alt="" />
                </div>

                <div>
                <img src={partn8} alt="" />
                </div>

                <div>
                <img src={partn9} alt="" />
                </div>

                <div>
                <img src={partn10} alt="" />
                </div>

                <div>
                <img src={partn11} alt="" />
                </div>

            </Slider>
        );
    }

    return <CustomCarousel />;
}

export default Partners;
