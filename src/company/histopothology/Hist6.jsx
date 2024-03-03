import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product6.png";
import product2 from "../../histopothologyImg/prod6.1.png";
import product3 from "../../histopothologyImg/prod6.2.png";
import product4 from "../../histopothologyImg/prod6.3.png";
import product5 from "../../histopothologyImg/prod6.4.png";
import product6 from "../../histopothologyImg/prod6.5.png";
// import product7 from "../../histopothologyImg/prod6.6.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist6() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>6250 Cryostat Microtome</h1>
            <MDBRow className="align-items-center justify-content-center">
                <MDBCol className="mt-4" lg={5}>
                    <img src={product1} className="w-100" alt="" />

                </MDBCol>
                <MDBCol className="mt-4" lg={5}>
                    <img src={product2} className="w-100" alt="" />
                </MDBCol>

                <MDBCol lg={12} className=" my-4 text-center">
                    <Link to={'/contact'} className="btn btn-primary ">Send enquiry</Link>
                </MDBCol>

                <p className="mt-4 text-center"><b>Dakewe 6250 Cryostat Microtome features high refrigeration capacity, fast cooling and stable sectioning result.</b></p>
                <MDBCol className="mt-4" lg={6}>
                    <h1>Reliable section quality</h1>
                    <h4>Exquisite mechanisms</h4>
                    <p><b>Driven by precise motors and durable guide rails, Dakewe 6250 cryostat produces uniform section continuously and fears not heavy workload.</b></p>
                    <h4>Applicable to all types of tissues</h4>
                    <p><b>Dakewe 6250 cryostat works smoothly when sectioning different kinds of tissues, hard or soft, large or small.</b></p>
                    <h4>Fulfill laboratory requirements</h4>
                    <p><b>18 freezing stations and 2 Peltier elements on the large freezing shelf with clear number markings on the large freezing shelf aid specimen identification during sectioning.</b></p>
                    <h4>Stable blade hold</h4>
                    <p><b>The high-quality blade holder adapts to both high and low profile blades and has an arc design to minimize blade trembling.</b></p>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product3} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product4} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Relaxing user experience</h1>
                    <h4>All crucial information at a glance</h4>
                    <p><b>The large color touch screen on Dakewe 6250 cryostat allows for the display of important parameters and toggles, making it easy to learn and use. A side control panel is present for convenient operation.</b></p>
                    <h4>Hassel-free components</h4>
                    <p><b>The heat extractor is coated with an anti-sticking layer to prevent sticking. Anti-roll guide designed with clamp can be hold at any position flexibly. The freezing shelf is frost-free.</b></p>
                    <h4>Clear sight all the time</h4>
                    <p><b>The glass window is heated to prevent frost from building up.</b></p>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Cooling fast, cooling lasts</h1>
                    <h4>Powerful compressor</h4>
                    <p><b>Continuous sectioning is made possible thanks to the quality compressor and smart temperature control algorithm.</b></p>
                    <h4>Rapid cooling peltier stations</h4>
                    <p><b>The peltier stations can rapidly reach and stablize around -55℃ to -60℃.</b></p>

                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product5} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <img src={product6} className="w-100" alt="" />
                </MDBCol>


                <MDBCol className="mt-4" lg={6}>
                    <h1>Innovative design, we care about you</h1>
                   
                   <h4>Schedule to fit your schedule</h4>
                   <p><b>UV disinfection and defrosting can be activated as scheduled or manually to synchronize with the laboratory's routine. Dakewe 6250 can be switched to sleep mode according to the preset schedule and thus helps to save energy.</b></p>
                   <h4>Throughout drying</h4>
                   <p><b>Extra drying function allows for rapid expulsion of moist in the chamber, saves the time from naturally drying and provides better drying results.</b></p>                   
                   <h4>Elegancy</h4>
                   <p><b>The monolithic shell of the cryostat is maintain and clean.</b></p>
                </MDBCol>




                <MDBCol lg={12}>
                    <h1>Specifications</h1>

                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
      <tbody>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Section thickness</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>1 μm - 100 μm</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Trimming thickness</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>1 μm - 600 μm</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Increment speed</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>300 μm/s (±10%), 900 μm/s (±10%)</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Chamber temp.</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>-35℃ - +40℃</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Freezing plate temp.</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>Minimum temperature -40℃ (±5℃)</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Number of freezing plates</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>18 pcs</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Rapid cooling peltier stations</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>2 pcs, Minimum temperature -60°C (±5℃)</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Size (with handwheel)</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>780 mm × 700 mm × 1280 mm</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Weight with packaging</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>208 ± 10 kg</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Power consumption</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>1200 VA</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Supply voltage / frequency</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>220 - 240 VAC, 50 Hz / 110 - 127 VAC, 60 Hz</td>
        </tr>
      </tbody>
    </table>
                </MDBCol>


            </MDBRow>

        </MDBContainer>
    )
}


export default Hist6;