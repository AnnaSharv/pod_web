import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
//import serialize from 'form-serialize';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



let url ="https://admin.podsolutions.de/api/request-merchant"


function ContactUsLong() {
  const btnText = useRef('')
  const [validated, setValidated] = useState(false);

  const [firstname, setfName] = useState('')
  const [lastname, setlName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    //setValidated(true)

    (async () => {
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                company,
                email,
                phone,
                website,
                message
            })
        });
        const content = await rawResponse.json();
        alert(content.message)
    })();
};
  


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="formExtended">
      <Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Select aria-label="Default select example">
                    <option>Select your package</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="First name" 
                    onChange= { (e) => {
                        setfName(e.target.value)
                    }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control required type="text" placeholder="Last name" 
                onChange= { (e) => {
                    setlName(e.target.value)
                }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Control type="text" placeholder="Company name (optional)" 
                onChange= { (e) => {
                    setCompany(e.target.value)
                }}
            />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Control type="email" placeholder="Email" required
                onChange= { (e) => {
                    setEmail(e.target.value)
                }}
            />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Control type="text" placeholder="Phone number (optional)"
                onChange= { (e) => {
                    setPhone(e.target.value)
                }}
            />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Control type="text" placeholder="Website (optional)"
                onChange= { (e) => {
                    setWebsite(e.target.value)
                }}
            />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md="12" controlId="validationCustom05" className="textarea">
                <div>
                    <textarea className="form-control" placeholder="Your text" id="floatingTextarea" style={{"minHeight" : 120 + "px"}} onChange= { (e) => {
                        setMessage(e.target.value)
                    }}></textarea>
                </div>
            </Form.Group>
       </Row>

      <Button type="submit" className="mt-2" onSubmit={handleSubmit} ref={btnText}> Send request </Button>
    </Form>
  );
}

export default ContactUsLong