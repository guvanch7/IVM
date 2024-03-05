import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Select from 'react-select';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTextArea
} from 'mdb-react-ui-kit';

const options = [
    { value: 'Request a quote/product information', label: 'Request a quote/product information' },
    { value: 'Customer service/technical support', label: 'Customer service/technical support' },
]

function Modal({ modalName }) {
    const [centredModal, setCentredModal] = useState(false);
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

    const toggleOpen = () => setCentredModal(!centredModal);

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
                    toggleOpen(); // Закрыть модальное окно после отправки
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
        <>
            <MDBBtn className="text-center mt-3 addEff2" onClick={toggleOpen}>{modalName}</MDBBtn>

            <MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Get a free consultation.</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form ref={form} onSubmit={sendEmail}>
                                <MDBRow className='mb-4'>
                                    <MDBCol>
                                        <Select
                                            placeholder={'Inquiry type'}
                                            name={'inquiry_type'}
                                            options={options}
                                            value={formData.inquiry_type}
                                            onChange={(selectedOption) => setFormData({ ...formData, inquiry_type: selectedOption })}
                                        />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            id='form6Example2'
                                            name='from_name'
                                            label='Name'
                                            onChange={handleChange}
                                            value={formData.from_name}
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput
                                    wrapperClass='mb-4'
                                    name='company_name'
                                    id='form6Example3'
                                    label='Company name'
                                    onChange={handleChange}
                                    value={formData.company_name}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    name='company_address'
                                    id='form6Example4'
                                    label='Address'
                                    onChange={handleChange}
                                    value={formData.company_address}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    name='company_phone'
                                    type='tel'
                                    id='form6Example6'
                                    label='Phone'
                                    onChange={handleChange}
                                    value={formData.company_phone}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    name='from_email'
                                    type='email'
                                    id='form6Example5'
                                    label='Email'
                                    onChange={handleChange}
                                    value={formData.from_email}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    name='country'
                                    type='text'
                                    id='form6Example6'
                                    label='Country or Region'
                                    onChange={handleChange}
                                    value={formData.country}
                                />

                                <MDBTextArea
                                    label='Additional information'
                                    name='message'
                                    id='textAreaExample'
                                    rows={4}
                                    onChange={handleChange}
                                    value={formData.message}
                                />

                                <MDBBtn className='mb-4 mt-3 w-25 addEff2' type='submit'>
                                    Send
                                </MDBBtn>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn className='addEff2'>Send</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default Modal;
