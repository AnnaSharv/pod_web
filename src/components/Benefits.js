import React from 'react'

import Panel from './Panel.js'
import BenefitsDiv from './BenefitsDiv.js'

//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imgBox from '../assets/box.png'
import label from '../assets/label.png'
import print from '../assets/print.png'
import settings from '../assets/settings.png'
import delivery from '../assets/delivery.png'
import support from '../assets/support.png'
function Benefits() {
  return (
    <div className="container">
        <Panel text="Your benefits" cClassName="merchantPanel"/>
        <div className="benefitsDivContainer">
            <Row>
                <Col md={4} xs={12}>
                    <BenefitsDiv 
                        src={imgBox} 
                        title="High-quality products" 
                        paragraph="Choose from over 300+ items and different printing processes"
                        alt="box"
                    />
                </Col>
                <Col md={4} xs={12}>
                    <BenefitsDiv 
                        src={label} 
                        title="High-quality products" 
                        paragraph="Choose from over 300+ items and different printing processes"
                        alt="box"
                    />
                </Col>
                <Col md={4} xs={12}>
                    <BenefitsDiv 
                        src={print} 
                        title="High-quality products" 
                        paragraph="Choose from over 300+ items and different printing processes"
                        alt="box"
                    />
                </Col>
                <Col md={4} xs={12}>
                    <BenefitsDiv 
                        src={settings} 
                        title="High-quality products" 
                        paragraph="Choose from over 300+ items and different printing processes"
                        alt="box"
                    />
                </Col>
                <Col md={4} xs={12}>
                    <BenefitsDiv 
                        src={delivery} 
                        title="High-quality products" 
                        paragraph="Choose from over 300+ items and different printing processes"
                        alt="box"
                    />
                </Col>
                <Col md={4} xs={12}>
                    <BenefitsDiv 
                        src={support} 
                        title="High-quality products" 
                        paragraph="Choose from over 300+ items and different printing processes"
                        alt="box"
                    />
                </Col>
            </Row>
            
         
        </div>
    </div>
  )
}

export default Benefits