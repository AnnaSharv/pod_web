import React from 'react'


import Banner from './Banner2.js'
import ContactLong from './ContactUsLong.js'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import Mobile from '../assets/mobile.png'
import Message from '../assets/message.png'
import Messenger from '../assets/messenger.png'

function Contact() {
  return (
    <Container className="container" style={{"marginTop" : 120 + "px"}}>
        <Row>
            <Col md={6} xs={12}>
                <Banner text={['', 'How can we help you?', 'Fill the form and drop your email']} cClassName={"contactBanner"}/>

                <div className="contactInfo">
                      <p> <img src={Mobile} alt="mobile" /> +1 (667) 65 55 53</p>
                      <p> <img src={Message} alt="message" />  Ouremail@gmail.com </p>
                      <p> <img src={Messenger} alt="messenger" /> /thiswebsiteefacebook </p> 
                </div>
            </Col>
            <Col md={6} xs={12} className="cLong">
                 <ContactLong />
            </Col>
        </Row>
    </Container>
  )
}

export default Contact