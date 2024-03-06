import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput,
    MDBCheckbox, MDBTextArea

} from 'mdb-react-ui-kit';
import Select from 'react-select'
import { Link } from 'react-router-dom';
import background from '../assets/background.png'


const options = [
    { value: 'request', label: 'Request a quote/product information' },
    { value: 'customer', label: 'Customer service/technical support' },
]

function ServiceThird() {
    const [formData, setFormData] = useState({
        inquiry_type: '',
        from_name: '',
        company_name: '',
        company_address: '',
        company_phone: '',
        from_email: '',
        country: '',
        message: ''
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_u0uxssi', 'template_phcsdew', form.current, {
                publicKey: 'ISCQz9QQvC_DwfI9L',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Очистка формы после отправки
                    setFormData({
                        inquiry_type: '',
                        from_name: '',
                        company_name: '',
                        company_address: '',
                        company_phone: '',
                        from_email: '',
                        country: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <MDBContainer className='background-logo' style={{backgroundImage: `url(${background})` }}>

                <MDBBtn className="mt-5" floating size='lg' tag='a'>
                    <Link to='/' className="text-white"><MDBIcon size="2x" fas icon="arrow-circle-left" /></Link>
                </MDBBtn>


                <MDBRow>
                    <MDBCol lg={6}>
                        <h2 className="mt-3 mb-4">Ask question</h2>
                        <hr className="linee" />
                        <p>
                            Our company managers will be delighted to answer your questions, provide
                            cost estimates for services, and prepare individual commercial proposals for you.
                        </p>
                    </MDBCol>

                    <MDBCol lg={6}>
                        <form ref={form} onSubmit={sendEmail}>
                            <MDBRow className='mb-4'>
                                <MDBCol>
                                    <Select placeholder={'Inquiry type'} name={'inquiry_type'} options={options} />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput id='form6Example2' name='from_name' label='Name' onChange={handleChange} value={formData.from_name} />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' name='company_name' id='form6Example3' label='Company name' onChange={handleChange} value={formData.company_name} />
                            <MDBInput wrapperClass='mb-4' name='company_address' id='form6Example4' label='Address' onChange={handleChange} value={formData.company_address} />
                            <MDBInput wrapperClass='mb-4' name='company_phone' type='tel' id='form6Example6' label='Phone' onChange={handleChange} value={formData.company_phone} />
                            <MDBInput wrapperClass='mb-4' name='from_email' type='email' id='form6Example5' label='Email' onChange={handleChange} value={formData.from_email} />
                            <MDBInput wrapperClass='mb-4' name='country' type='text' id='form6Example6' label='Country or Region' onChange={handleChange} value={formData.country} />

                            <MDBTextArea label='Additional information' name='message' id='textAreaExample' rows={4} onChange={handleChange} value={formData.message} />



                            <MDBBtn className='addEff2 mb-4 mt-3 w-25 ' type='submit'>
                                Send
                            </MDBBtn>
                        </form>
                    </MDBCol>


                </MDBRow>

            </MDBContainer>
        </div>
    )
}


export default ServiceThird;
