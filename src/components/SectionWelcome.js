import React from 'react'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import Banner from './Banner.js'; 
import Button from './CustomButton.js'
import AnimatedBG from './AnimatedBG.js'

function SectionWelcome() {
  return (
    <div className="sectionWelcome">
      <Banner title={ <>We connect Shopify Merchants with <br /> Printing companies </>}
      paragraph={<>Our solution is aimed at Shopify merchants, as well as printing companies looking to <br /> expand their customer base. </>} />

      {/* <div className="flexButtons">
        <Button text={"For Shopify Merchants"} cClassName={"lpButton"}/>
        <Button text={"For Shopify Companies"} cClassName={"lpButton"}/>
      </div> */}
        <Container className="flexButtons">
            <Row className="gy-4">
              <Col md={6} xs={12}>
                <Link to="/merchants">
                  <Button text={"For Shopify Merchants"} cClassName={"lpButton"}/>
                </Link>
              </Col>
              <Col md={6} xs={12}>
                <Link to="/companies"> 
                  <Button text={"For Shopify Companies"} cClassName={"lpButton"}/>
                </Link>
              </Col>
            </Row>
        </Container>
        <AnimatedBG />
    </div>
  )
}

export default SectionWelcome