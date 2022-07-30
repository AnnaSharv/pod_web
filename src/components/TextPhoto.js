import React from 'react'

import Banner from './Banner.js'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextPhoto(props) {
  return (
    <Container>
        <Row className={`container ${props.cClassName}`}>
            <Col md={6} xs={12}>
                <Banner 
                    title={props.title} 
                    smallTitle={props.smallTitle} 
                    paragraph={props.paragraph} 
                    cClassName="textPhoto"
                />
            </Col>
            <Col md={6} xs={12}> 
                {
                    props.index && <span className="imgindex">{props.index}</span>
                }
                {
                    !props.img && <div className='bg-dark rounded testsquare'>h</div>
                }
                { 
                    props.img && <img src={props.img} alt="img" />
                }
            </Col>
        </Row>
    </Container>
  )
}

export default TextPhoto