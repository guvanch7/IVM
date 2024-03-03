import React from "react";
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import product1 from "../../histopothologyImg/product7.png";
import product2 from "../../histopothologyImg/prod7.1.png";

import { Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';







function Hist7() {
    return (
        <MDBContainer className="mt-5 mb-3">
            <h1>DP360 & CS500 stainer & coverslipper workstation</h1>
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

                <p className="mt-4 text-center"> High throughput, fully automated staining and coverslipping process. Quality control system embedded and ready-to-use consumables, and patented AAT system keeps each slide consistent. </p>

                <MDBCol className="mt-4" lg={12}>
                    <h4>Combo system: The future of pathology's workstation</h4>

                    <p> High throughput, fully automated staining and coverslipping process. Quality control system embedded and ready-to-use consumables, and patented AAT system keeps each slide consistent. </p>
                    <h4>Expertise in quality control, excellent staining effect</h4>
                    <h1>Patented AAT system</h1>
                    <p> AAT technology keeps staining consistent according to the specimen / numbers of staining rack and /or days of hematoxylin and eosin use, the soaking time will be gradually increased to achieve staining consistency. </p>
                    <p> This system saves on the reagent cost. </p>
                    <h1>Reagent Management: quality control</h1>
                    <p> The Software controls the reagent management system. It allows the users to monitor reagent utilization and automatically generates a replacement reminder. This report enables effective traceability and management of staining quality and helps to reduce reagent costs. </p>
                    <h1>Reduce reagent carry over and cross contamination</h1>
                    <p> The powerful robotic arm has the function of " leaching" and "shaking" .The slide stainer can effectively reduce reagent carry over and limit cross contamination. </p>
                    <h1>High speed robotic arm</h1>
                    <p> The robotic arm is quick and silent . Its vertical pulling speed can be as fast as 0.76 m/s. It allows up to 11 slide racks to run at the same time. The staining time is always accurate. </p>
                    <h4>High throughput, high efficiency</h4>
                    <h1>High-throughput staining and coverslipping</h1>
                    <p> The innovative intelligent software algorithm is able to handle approximately 360 slides per hour (depending on the user protocols). </p>
                    <p> On Combo mode, the transfer process is managed inside the CS500 without additional transfer station. </p>
                    <h1>CS500 Automated inspection</h1>
                    <p> The device’s performance and reagent status are automatically checked before each run. The damaged coverslips are automatically identified . The CS500 has a micro-pump which delivers the exact mounting media, to prevent spillage. To avoid needle blockage, the needle will be automatically self-cleaned once coverslipping is completed. </p>
                    <h1>Horizontal Slide tray output</h1>
                    <p> No manual transfer is needed, which allows for convenient image reading. </p>
                    <h4>Flexibility</h4>
                    <h1>Enter up to 100 protocols</h1>
                    <p> 2 Pre-programmed protocols : H/E staining, PAP staining. </p>
                    <h1>Flexible reagent solution</h1>
                    <p> Optional exclusive ready-to-use reagent supplies for better results. </p>
                    <h1>Reagent heating station</h1>
                    <p> The reagent can be slightly heated to eliminate the impact of climate differences and save reagent costs. </p>
                    <h4>QC for each slide</h4>
                    <h1>Scientific management for reagents</h1>
                    <ul>
                        <li><strong>Reminder or forcible execution for reagents renewal.</strong></li>
                        <li><strong>Historical renewal records can be checked at any time.</strong></li>
                        <li><strong>Graphic reports of SOP can be exported directly.</strong></li>
                        <li><strong>Statistics of reagents consumption.</strong></li>
                    </ul>
                    <h1>Human-computer interaction is intuitive</h1>
                    <p>Display indicates the status of the Stainer and coverslipper, the current reagent status and the amount of slides that have been completed.</p>
                    <h1>Remote real-time monitoring, alarms and queries</h1>
                    <p> DAKEWE cloud remote monitoring system allows real-time monitoring of instrument status and remote warning (through webpage, email, SMS, and other ways), for effective management of equipment and enhanced tissue safety. </p>
                    <h4>Safety and ergonomic</h4>
                    <h1>Unique interaction</h1>
                    <p> 25 cm (10.4 inch) color touch display, user-friendly software design, simple operation process. </p>
                    <h1>Total safety</h1>
                    <p> The intelligent exhaust gas monitoring function ensures that fumes do not escape. The exhaust gas concentration sensor monitors in real-time to protect staff's health. </p>
                    <h1>Various alarms</h1>
                    <p> Real-time voice, visual signals, text, and notification via application provide an intelligent operating guide program. </p>
                </MDBCol>






                <MDBCol lg={12}>
                    <h1>Specifications</h1>
                    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
      <tbody>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>DP360 Technical Specifications</th>
          <td style={{ border: '1px solid black', padding: '8px' }}></td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Dimensions, unpacked (W x D x H)</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>1066 x 700 x 630 mm</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Net Weight</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>approx. 130 kg</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Power consumption</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>1200 VA</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Supply voltage/ frequency</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>100 - 240 VAC, 50/60 Hz</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Operating temperature range</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>+15°C to +40°C</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Total stations</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>26</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Oven station and temperature</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>1; Max temperature 75°C</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Reagent heating station</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>4; Max temperature 38°C</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Water washing station</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>4</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Reservoir volume</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>480 ml ± 20 ml</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Program storage capacity</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>≥100 programs</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Slide rack capacity</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>30 pcs</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Throughtput H/E</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>360 slides per hour</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>CS500 Technical Specifications</th>
          <td style={{ border: '1px solid black', padding: '8px' }}></td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Dimensions, unpacked (W x D x H)</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>660 x 770 x 640 mm</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Net weight</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>approx. 90 kg</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Power consumption</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>180 VA</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Supply voltage/ frequency</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>100 - 240 VAC, 50/60 Hz</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Horizontal output storage</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>90 pcs</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Coverslip capacity</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>200 pcs</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Mountant bottle capacity</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>250 ml</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Throughput</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>360 slides per hour</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Coverslip sizes (mm)</th>
          <td style={{ border: '1px solid black', padding: '8px' }}>24 x 50</td>
        </tr>
      </tbody>
    </table>

                </MDBCol>


            </MDBRow>

        </MDBContainer>
    )
}


export default Hist7;