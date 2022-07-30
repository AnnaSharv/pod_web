import React from 'react'
import '../styles/style.css'

import Banner from './Banner.js'
import Button from '../components/CustomButton.js'
import Benefits from '../components/BenefitsDiv.js'
import Company from '../assets/company_analytics.png'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CompaniesLP() {
  return (
    <div className="container companiesLP">
        <div className='banner'>   
            <Banner title={"Expand your customer base at no cost. With our app, you can now easily offer print on demand without the hassle."}
            paragraph={"Print on demand is a new and booming business, but for most printing companies the processing of individual orders is too time-consuming and therefore not lucrative. Thanks to our interface connection, printing companies can now process large order volumes with individual print files almost automatically. Instead of tedious, time-consuming CSV sheets or confusing email processing, our app provides the print files and order information in an uncomplicated way. PODsolutions automatically creates shipping labels and updates the tracking information in the backend of your customers. "}/>

            <Button text={'Get in touch'} cClassName={"lpButton lpButtonCompany"}/>
        </div>

        <div className="company_analytics_img">
            <img  alt="company_analytics" src={Company} />
        </div>

        <Container className="yourBenefits">
            <Row className="justify-content-between">
                <Col md={6} xs={12} className="testsquare m-0 bg-dark" >
                    img
                </Col>
                <Col md={6} xs={12} className="d-flex flex-wrap p-0">
                    <Col md={12} xs={12} className="p-0 title">
                        Your benefits
                    </Col>
                    <Col md={6} xs={12} className="p-0">
                        <Benefits title={"Competitive advantage"} paragraph={"Through PODsolutions you can accept new customers every day and thus help your company to grow again"}/>
                    </Col>
                    <Col md={6} xs={12}>
                        <Benefits title={"Automated replacement delivery processing"} paragraph={"In the event of damaged or missing delivery, your customer can easily forward this to you. "}/>
                    </Col>
                    <Col md={6} xs={12} className="p-0">
                        <Benefits title={"Clear order system"} paragraph={"We provide you with all the important information for uncomplicated processing so that you always have an overview."}/>
                    </Col>
                    <Col md={6} xs={12}>
                        <Benefits title={"Accounting made easy"} paragraph={"Download comprehensive daily reports on all orders to help your accounting department work even more efficiently."}/>
                    </Col>
                    <Col md={6} xs={12} className="p-0">
                        <Benefits title={"Automatic creation of shipping labels"} paragraph={"Link your DHL business account to our app and automatically create shipping labels that are automatically entered into your customer's backend."}/>
                    </Col>
                    <Col md={6} xs={12}>
                        <Benefits title={"Solution-oriented customer service "} paragraph={"We improve our service in consultation with you and your individual needs, feel free to contact us at any time."}/>
                    </Col>
                    
                    
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default CompaniesLP