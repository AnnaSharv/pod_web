import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


import Select from './Select.js'

import LogoBlack from '../assets/logo_black.png'


import '../styles/style.css'
function NavigationMenu(props) {
  

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`my-navbar-container ${props.cClassName}`}>
        <Container className="p-0">
          <Link to="/">

            <Navbar.Brand><img src={LogoBlack} alt="PODlogo"/></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto my-navbar justify-content-center">
              {
                props.navLinks.map((navlink, i) => {
                  return <Link to = {navlink} key={i} className="nav-link"> {navlink} </Link>
                })
              }
            </Nav>
            <Nav className="selectNavbar">
              <Select /> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


     
    </>
  );
}

export default NavigationMenu;