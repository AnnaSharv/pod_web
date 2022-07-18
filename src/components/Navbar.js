import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
//import NavDropdown from 'react-bootstrap/NavDropdown';

import Select from './Select.js'

import LogoBlack from '../assets/logo_black.png'

import '../styles/style.css'
function NavigationMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="my-navbar">
      <Container className="p-0">
        <Link to="/">

          <Navbar.Brand href="#home"><img src={LogoBlack} alt="PODlogo"/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto my-navbar justify-content-center">
            <Nav.Link href="#features">Merchant</Nav.Link>
            <Nav.Link href="#pricing">Printing Company</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> <Select /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;