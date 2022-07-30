import React from 'react'

import SectionWelcome from '../components/SectionWelcome'
import SectionInfo from '../components/SectionInfo'

//components
import Navbar from '../components/Navbar.js'; 
function LandingPage(props) {
  return (
    <div>
      <Navbar navLinks={props.navLinks}/>
      <SectionWelcome />
      <SectionInfo />
    </div>
  )
}

export default LandingPage