import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PodlogoWhite from '../assets/logo_white.png'
function Footer(props) {
  let {ourPages, innerPagesMerchant, innerPagesCompany, socialsPages} = props;

  return (
    <div className={`footer ${props.cClassName}`}>
        <Container>
            <Row>
                <Col lg={3} md={12} xs={12} className="line">
                    <div className="footerContainerDiv footerContainerDivlogo">
                        <div className="text-center displayOnSmallerScreen d-none">Podsolutionshopify</div>
                        <img src={PodlogoWhite}  className="p" alt="POD_logo"/>
                        <p className="p">Find the right print-on-demand printing company for your shop in minutes. With our fully automated</p>
                    </div>
                </Col>
                <Col lg={9} md={12} xs={12}>
                    <div className="footerContainerDiv">
                        <div className="footerListcontainer">
                            <ul className="footerUl footerUl-1">
                                {
                                    ourPages.map((link, i) => {
                                        return <li key={i}>{link}</li>
                                    })
                                }
                            </ul>
                            <div className="d-flex gap-3 footer-large-p">
                                <ul className="footerUl">
                                    {
                                        innerPagesMerchant.map((link, i) => {
                                            return <li key={i}>{link}</li>
                                        })
                                    }
                                </ul>
                                <ul className="footerUl">
                                    {
                                        innerPagesCompany.map((link, i) => {
                                            return <li key={i}>{link}</li>
                                        })
                                    }
                                </ul>
                            </div>

                            <ul className="footerUl footerUl-2">
                                    {
                                        socialsPages.map((link, i) => {
                                            return <li key={i}>{link}</li>
                                        })
                                    }
                            </ul>

                        </div>
                        <div className="d-flex pp displayOnSmallerScreen">
                            <div>DOCUMENTATION</div>
                            <div>PRIVACY & COOKIE POLICY</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer