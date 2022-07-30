import React from 'react'
import Button from 'react-bootstrap/Button';

import Banner from './Banner.js'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomDropdown from './CustomDropdown.js';



function ContactShort() {
  return (
    <Container className="contactUsShortContainer">
        <Row className="w-100 m-0">
            <Col md={6} xs={12} className="p-0">
                 <Banner title={<>Start your POD <br /> Business now</>} paragraph="We are always happy for new costumers" cClassName="banner-text-left"/>
            </Col>
            <Col md={6} xs={12} className="p-0">
                 <Container className='contactFormShort p-0'>
                    <Row className="h-100 justify-content-around">
                        <Col md={4} xs={12} className="p-0"> <input placeholder='Your name'/> </Col>
                        <Col md={7} xs={12} className="p-0"> 
                            {/* <input placeholder='Your number'/>  */}
                            <CustomDropdown />
                        </Col>
                        <Col md={12} xs={12} className=" position-relative d-flex align-self-end"> 
                            <input placeholder='Your business email' /> 
                            <Button variant="primary" className="sendMail">Send mail</Button>
                        </Col>
                    </Row>
                 </Container>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactShort