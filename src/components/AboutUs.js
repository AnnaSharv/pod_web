import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Panel from './Panel.js'
import Banner from './Banner.js'

import ShopifyLogo from '../assets/logo_shopify.png'
function AboutUs() {
  return (
    <div className="aboutUsContainer">
        <Panel text={"About Us"} cClassName={"aboutUsPanel"} />
        <Banner title={"text"} cClassName="aboutUsTitle"/>
        <Container className="aboutUsText">
            <Row className="aboutUsRow">
                <Col lg={6} xs={12} className="col-half">
                    Find the right print-on-demand printing company for your shop in minutes. With our fully automated app, you can get started immediately with just a few clicks and no minimum order quantity. Extraordinary products and printing methods at fair prices.
                </Col>
                <Col lg={6} xs={12} className="col-half"> 
                    Find the right print-on-demand printing company for your shop in minutes. With our fully automated app, you can get started immediately with just a few clicks and no minimum order quantity. Extraordinary products and printing methods at fair prices.</Col>
                <Col lg={12} xs={12} className="col-full">
                    Find the right print-on-demand printing company for your shop in minutes. With our fully automated app, you can get started immediately with just a few clicks and no minimum order quantity. Extraordinary products and printing methods at fair prices.
                </Col>
                <Col className="aboutUsInfo ">
                   <div>We work <br/> Different platforms</div>
                   <div><img src={ShopifyLogo} /></div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutUs